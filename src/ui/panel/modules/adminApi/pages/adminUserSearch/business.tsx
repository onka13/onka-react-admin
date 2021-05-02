import React, { useState } from 'react';
import { pageConfig } from './config';
import CustomComponents from '../../../../components/CustomComponents';
import {
  InputComponentProp,
  PageType,
  Parameters,
  PageField,
  LibService,
  ApiBusinessLogic,
  UIManager,
  GridBulkActionProp,
  GridRowExtraActionProp,
  UpsertPage,
  DetailPage,
  SearchPage,
} from 'onka-react-admin-core';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import adminApiEnums from '../../adminApiEnums';

interface IUserRolesMapProps {
  isSuper: boolean;
  userId: any;
}

function UserRolesMap(props: IUserRolesMapProps) {
  function loadData() {
    return new ApiBusinessLogic().request('GET', pageConfig.route + '/getRoles/' + props.userId, {});
  }

  function onSubmit(data: Parameters) {
    console.log('values', data);
    new ApiBusinessLogic().request('POST', pageConfig.route + '/assignRole', { userId: props.userId, roles: data.roles });
  }

  if (props.isSuper) {
    return (
      <div className="p20">
        <h4> Super Admin</h4>
      </div>
    );
  }

  return UpsertPage({
    isEdit: true,
    pageConfig,
    fields: [
      new PageField({
        name: 'roles',
        editComponent: CustomComponents.MultiReferenceComponent,
        createComponent: CustomComponents.MultiReferenceComponent,
        reference: {
          route: '/AdminApi/AdminRoleSearch',
          filterField: 'name',
          dataField: 'role',
          sortDirection: 'ASC',
          sortField: 'id',
        },
      }),
    ],
    initialValues: {},
    loadData,
    onSubmit
  });
}

function SearchRowActions(props: GridRowExtraActionProp) {
  const hasAccessRoles = LibService.instance().hasAccess(pageConfig.moduleKey, pageConfig.pageKey, 'assignRole');
  function openDialog() {
    UIManager.instance().dialog.open(
      {
        width: '20vw',
        height: '95vh',
        title: 'Roles',
        content: <UserRolesMap userId={props.rowData.id} isSuper={props.rowData.isSuper} />,
      },
      (res: any) => {
        console.log('dialog res', res);
      },
      {
        hasBackdrop: true,
        justifyContent: 'flex-end',
        closable: true,
        wrapContent: true,
      }
    );
  }
  return (
    <>
      <Button size="small" variant="text" color="secondary" onClick={openDialog}>
        Roles
      </Button>
    </>
  );
}

function SearchBulkActions(props: GridBulkActionProp) {
  return <></>;
}

export const initialValues = {
  status: adminApiEnums.Status.Active,
  theme: adminApiEnums.AdminUserTheme.Light,
  isSuper: false,
};

export function getFields(pageType: PageType, prefix?: string) {
  return LibService.instance().filterFields(pageConfig.fields, pageType, prefix);
}

function Search(params: any) {
  let gridFields = pageConfig.gridFields;
  let filterFields = pageConfig.filterFields;
  return SearchPage({ pageConfig, gridFields, filterFields, fields: pageConfig.fields, rowActions: SearchRowActions });
}

function Detail(params: any) {
  let fields = getFields('detail');
  return DetailPage({
    pageConfig: pageConfig,
    tabs: [
      {
        label: 'General',
        fields: fields.slice(0, 3),
      },
      {
        label: 'Extra',
        fields: fields.slice(3),
      },
    ],
  });
}

function Upsert(params: any) {
  const { id } = useParams<{ id: any }>();
  const isEdit = !!id;
  let fields = getFields(isEdit ? 'edit' : 'create');
  var email = fields.find((x) => x.name == 'email');
  if (email) {
    email.editComponent = function (props: InputComponentProp) {
      return CustomComponents.InputComponent({ ...props, readonly: true });
    };
  }
  return UpsertPage({
    pageConfig,
    initialValues,
    tabs: [
      {
        label: 'General',
        fields: fields.slice(0, 3),
      },
      {
        label: 'Extra',
        fields: fields.slice(3),
      },
    ],
  });
}

export { Search, Detail, Upsert };
