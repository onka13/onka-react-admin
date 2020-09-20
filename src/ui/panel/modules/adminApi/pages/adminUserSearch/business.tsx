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

interface IUserRolesMapProps {
  isSuper: boolean;
  userId: any;
}

function UserRolesMap(props: IUserRolesMapProps) {
  function loadData() {
    return new ApiBusinessLogic().request('POST', pageConfig.route + '/getRoles', { userId: props.userId });
  }

  function onSubmit(data: Parameters) {
    console.log('values', data);
    new ApiBusinessLogic().request('POST', pageConfig.route + '/assignRole', { userId: props.userId, roles: data.roles });
  }

  // if (props.isSuper) {
  //   return (
  //     <div className="p20">
  //       <h4> Super Admin</h4>
  //     </div>
  //   );
  // }

  return UpsertPage({
    isEdit: true,
    pageConfig,
    fields: [
      new PageField({
        name: 'roles',
        editComponent: CustomComponents.MultiReferenceComponent,
        createComponent: CustomComponents.MultiReferenceComponent,
        reference: {
          reference: '/AdminApi/AdminRoleSearch',
          filterField: 'name',
          pageSize: 10,
          sortDirection: 'ASC',
          sortField: 'id',
        },
      }),
    ],
    initialValues: {},
    loadData,
    onSubmit,
    columnCount: 1,
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
      <li className="nk-tb-action-hidden">
        <button className="btn btn-trigger btn-icon" onClick={openDialog}>
          Roles
        </button>
      </li>
    </>
  );
}

function SearchBulkActions(props: GridBulkActionProp) {
  return <></>;
}

export const initialValues = {};

export function getFields(pageType: PageType, prefix?: string) {
  return LibService.instance().filterFields(pageConfig.fields, pageType, prefix);
}

function Search(params: any) {
  let gridFields = getFields('list');
  let filterFields = getFields('filter');
  return SearchPage({ pageConfig, gridFields, filterFields, rowActions: SearchRowActions });
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
  const isEdit = id && id > 0;
  let fields = getFields(isEdit ? 'edit' : 'create').filter((x) => ['addressId', 'contactId'].indexOf(x.name) == -1);
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
      }
    ],
  });
}

export { Search, Detail, Upsert };
