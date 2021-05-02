// Auto generated file
import { PageConfig, PageField, PageGridField, Validators } from 'onka-react-admin-core';
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
  inlineEditing: false,
  primaryKeys: ['id'],
  fields: [
    new PageField({
      displayInDetail: true,
      name: 'id',
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      createComponent: CC.NumberComponent,
      editComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'roleId',
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      createComponent: CC.NumberComponent,
      editComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'moduleKey',
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'pageKey',
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'actionKey',
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'action',
      enumName: 'AdminRoleAction',
      enum: adminApiEnums.AdminRoleAction,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      createComponent: CC.SelectComponent,
      editComponent: CC.SelectComponent
    })
  ],
  filterFields: [
    new PageField({
      name: 'roleId',
      filterComponent: CC.NumberComponent
    }),
    new PageField({
      name: 'moduleKey'
    }),
    new PageField({
      name: 'pageKey'
    }),
    new PageField({
      name: 'actionKey'
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

