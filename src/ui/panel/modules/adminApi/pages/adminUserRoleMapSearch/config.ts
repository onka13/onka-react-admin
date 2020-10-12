// Auto generated file
import { PageConfig, PageField, PageFilterField, PageGridField, Validators } from 'onka-react-admin-core';
import CC from '../../../../components/CustomComponents';
import adminApiEnums from '../../adminApiEnums';

export const pageConfig = new PageConfig({
  route: '/AdminApi/AdminUserRoleMapSearch',
  moduleKey: 'AdminApi',
  pageKey: 'AdminUserRoleMap',
  menu: 'AdminApi',
  menuOrder: 0,
  hideMenu: true,
  get: false,
  edit: false,
  new: true,
  delete: true,
  export: false,
  primaryKeys: ['id'],
  fields: [
    new PageField({
      displayInDetail: true,
      name: 'id',
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.NumberComponent,
      createComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'userId',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.NumberComponent,
      createComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'roleId',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      reference: {
        route: 'AdminApi/AdminRoleSearch',
        filterField: 'name',
        dataField: 'role',
      },
      editComponent: CC.ReferenceComponent,
      createComponent: CC.ReferenceComponent
    })
  ],
  filterFields: [
    new PageFilterField({
      name: 'userId',
      filterName: 'UserId'
    }),
    new PageFilterField({
      name: 'roleId',
      filterName: 'RoleId',
      reference: {
        route: 'AdminApi/AdminRoleSearch',
        filterField: 'name',
        dataField: 'role',
      }
    })
  ],
  gridFields: [
    new PageGridField({
      name: 'userId',
      isSortable: true,
      dataType: 'number'
    }),
    new PageGridField({
      name: 'roleId',
      reference: {
        route: 'AdminApi/AdminRoleSearch',
        filterField: '',
        dataField: 'role',
      },
      dataType: 'number'
    })
  ],
});

