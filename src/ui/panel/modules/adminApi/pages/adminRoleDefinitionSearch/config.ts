// Auto generated file
import { PageConfig, PageField, PageFilterField, PageGridField, Validators } from 'onka-react-admin-core';
import CC from '../../../../components/CustomComponents';
import adminApiEnums from '../../adminApiEnums';

export const pageConfig = new PageConfig({
  route: '/AdminApi/AdminRoleDefinitionSearch',
  moduleKey: 'AdminApi',
  pageKey: 'AdminRoleDefinition',
  menu: 'AdminApi',
  menuOrder: 0,
  hideMenu: true,
  get: false,
  edit: false,
  new: false,
  delete: false,
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
      name: 'roleId',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.NumberComponent,
      createComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'moduleKey',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'pageKey',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'actionKey',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'action',
      displayInCreate: true,
      displayInEdit: true,
      enumName: 'AdminRoleAction',
      enum: adminApiEnums.AdminRoleAction,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    })
  ],
  filterFields: [
    new PageFilterField({
      name: 'roleId',
      filterName: 'RoleId'
    }),
    new PageFilterField({
      name: 'moduleKey',
      filterName: 'ModuleKey'
    }),
    new PageFilterField({
      name: 'pageKey',
      filterName: 'PageKey'
    }),
    new PageFilterField({
      name: 'actionKey',
      filterName: 'ActionKey'
    })
  ],
  gridFields: [
    new PageGridField({
      name: 'roleId',
      dataType: 'number'
    }),
    new PageGridField({
      name: 'moduleKey',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'pageKey',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'actionKey',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'action',
      enumName: 'AdminRoleAction',
      enum: adminApiEnums.AdminRoleAction,
      dataType: 'number'
    })
  ],
});

