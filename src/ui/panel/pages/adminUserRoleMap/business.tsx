import React, { useState, useEffect } from 'react';
import { pageConfig } from './config';
import styled from 'styled-components';
import { ApiBusinessLogic, LibService, LocaleService, Parameters, UIManager } from 'onka-react-admin-core';
import { Button, Checkbox } from '@material-ui/core';

const StyledDiv = styled.div({
  backgroundColor: '#fff',
  padding: 10,
  width: '100%',
  overflowX: 'auto',
  '.tableRoleMap': {
    minWidth: 700,
    ' th, td': {
      textAlign: 'center',
      padding: 5,
      borderBottom: 0,
    },
  },
  '.firstColumnRoleMap': {
    width: 200,
    minWidth: 200,
  },
  '.rowRoleMap': {
    ':nth-of-type(odd)': {
      backgroundColor: '#eee',
    },
    ':nth-of-type(even)': {
      backgroundColor: '#ccc',
    },
  },
  '.moduleRow': {
    backgroundColor: '#203c4b',
    color: '#fff',
  },
  '.actionTable': {
    padding: 0,
    margin: 0,
  },
  '.actionCell': {
    textAlign: 'center',
    width: '16.6%',
  },
  '.extraAction': {
    display: 'inline-flex',
    alignItems: 'center',
  },
});

const defaultActions = ['admin', 'list', 'get', 'new', 'edit', 'delete'];

const roleValues: Parameters = {};
const checkboxList: Parameters = {};

interface MyCheckboxProps {
  roleId: number;
  moduleKey: string;
  pageKey: string;
  actionKey: string;
}

function MyCheckbox(props: MyCheckboxProps) {
  var key = props.roleId + '_' + props.moduleKey + '_' + props.pageKey + '_' + props.actionKey;
  var adminKey = props.roleId + '_' + props.moduleKey + '_' + props.pageKey + '_admin';
  const [isChecked, setIsChecked] = useState<boolean>(roleValues[key] || roleValues[adminKey] || false);

  function handleChange(event: any) {
    if (props.actionKey == 'admin') {
      for (var i = 0; i < defaultActions.length; i++) {
        if (defaultActions[i] == 'admin') continue;
        var otherKey = props.roleId + '_' + props.moduleKey + '_' + props.pageKey + '_' + defaultActions[i];
        checkboxList[otherKey].change(event.target.checked);
        roleValues[otherKey] = false;
      }
    } else {
      if (roleValues[adminKey]) {
        return false;
      }
    }
    roleValues[key] = event.target.checked;
    change(event.target.checked);
  }
  function change(isChecked: boolean) {
    setIsChecked(isChecked);
  }
  checkboxList[key] = {
    change: change,
  };
  return (
    <Checkbox checked={isChecked} onChange={handleChange} id={key} title={props.actionKey} />
  );
}

export function RoleMap() {
  const [data, setData] = useState<{ roleActions: any; roles: any; currentRoles: any; moduleData: any }>({
    roles: [],
    roleActions: [],
    currentRoles: [],
    moduleData: [],
  });
  const translate = (a: any, b?: any) => LocaleService.instance().translate(a, b);
  function loadData() {
    new ApiBusinessLogic().request('POST', pageConfig.route + '/all', {}).then((response) => {
      console.log('res', response);
      var roles = response.value.roles;
      var roleActions = response.value.roleActions;
      var currentRoles = response.value.currentRoles;
      for (let i = 0; i < currentRoles.length; i++) {
        roleValues[currentRoles[i].roleId + '_' + currentRoles[i].moduleKey + '_' + currentRoles[i].pageKey + '_' + currentRoles[i].actionKey] = true;
      }
      var moduleData: any = {};
      for (let i = 0; i < roleActions.length; i++) {
        var item = roleActions[i];
        if (!moduleData[item.moduleKey]) moduleData[item.moduleKey] = {};
        if (!moduleData[item.moduleKey][item.pageKey]) moduleData[item.moduleKey][item.pageKey] = [];
        if (moduleData[item.moduleKey][item.pageKey].indexOf(item.actionKey) == -1) moduleData[item.moduleKey][item.pageKey].push(item.actionKey);
      }
      setData({ roles, roleActions, currentRoles, moduleData });
    });
  }

  function refreshRoles(e: any) {
    e.preventDefault();
    new ApiBusinessLogic().request('POST', pageConfig.route + '/updateRoleActionList', {}).then((response) => {
      if (!response) return;
      UIManager.instance().displayMessage({
        text: 'Refreshed ' + response.value,
        type: 'info',
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
  function saveAll(e: any) {
    e.preventDefault();
    var selectedList = Object.keys(roleValues).filter((x) => roleValues[x]);
    new ApiBusinessLogic()
      .request('POST', pageConfig.route + '/save', {
        roles: selectedList,
      });
  }

  useEffect(() => {
    loadData();
    var refreshSubscription = LibService.instance().refreshPage.subscribe(() => {
      loadData();
    });
    return () => {
      refreshSubscription.unsubscribe();
    };
  }, []);

  var comp = [];

  for (const moduleKey in data.moduleData) {
    var headComp = [];
    var bodyComp = [];
    headComp.push(
      <tr key={moduleKey} className="moduleRow">
        <td className="firstColumnRoleMap">{translate('modules.' + moduleKey.replace('Module', ''))}</td>
        {data.roles.map((role: any, j: number) => {
          return (
            <td key={j}>
              <table className="actionTable">
                <tbody>
                  <tr>
                    <td colSpan={defaultActions.length} align="center">
                      {role.name}
                    </td>
                  </tr>
                  <tr>
                    {defaultActions.map((x, i) => {
                      return (
                        <td key={i} className="actionCell">
                          {x.indexOf('proc') == 0 ? x : translate('role.' + x)}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </td>
          );
        })}
      </tr>
    );
    for (const pageKey in data.moduleData[moduleKey]) {
      var actions = data.moduleData[moduleKey][pageKey];
      var extraActions = actions.filter((x: any) => defaultActions.indexOf(x) == -1);
      bodyComp.push(
        <tr key={pageKey} className="rowRoleMap">
          <td className="firstColumnRoleMap">{translate('resources.AdminApi/' + pageKey + 'Search.name', pageKey)}</td>
          {data.roles.map((role: any, j: number) => {
            return (
              <td key={j}>
                <table className="actionTable">
                  <tbody>
                    <tr>
                      {defaultActions.map((x, i) => {
                        return (
                          <td key={i} className="actionCell">
                            <MyCheckbox roleId={role.id} moduleKey={moduleKey} pageKey={pageKey} actionKey={x} />
                          </td>
                        );
                      })}
                    </tr>
                    {extraActions.length > 0 && (
                      <tr>
                        <td align="center" colSpan={defaultActions.length} style={{ textAlign: 'center' }}>
                          {extraActions.map((x: any, i: number) => {
                            return (
                              <div key={i} className="extraAction">
                                <span className="pr5">{x.indexOf('proc') == 0 ? x : translate('role.' + x)}</span>
                                <MyCheckbox roleId={role.id} moduleKey={moduleKey} pageKey={pageKey} actionKey={x} />
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            );
          })}
        </tr>
      );
    }
    comp.push(
      <table key={'table' + moduleKey} className="tableRoleMap">
        <thead>{headComp}</thead>
        <tbody>{bodyComp}</tbody>
      </table>
    );
  }
  return (
    <StyledDiv>
      <div className="d-flex flex-row" style={{ padding: 30 }}>
        <Button onClick={refreshRoles} variant="contained" color="secondary" className="mr10">
          Refresh Role Definitions
        </Button>
        <Button onClick={saveAll} variant="contained" color="primary">
          SAVE
        </Button>
      </div>
      {comp}
    </StyledDiv>
  );
}

/*

*/
