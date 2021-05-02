// Auto generated file
import { PageConfig, PageField, PageGridField, Validators } from 'onka-react-admin-core';
import CC from '../../../../components/CustomComponents';
import adminApiEnums from '../../adminApiEnums';

export const pageConfig = new PageConfig({
  route: '/AdminApi/AdminRoleSearch',
  moduleKey: 'AdminApi',
  pageKey: 'AdminRole',
  menu: 'AdminApi',
  menuOrder: 0,
  hideMenu: false,
  get: false,
  edit: true,
  new: true,
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
      name: 'name',
      validators: [Validators.required, Validators.maxLength(200)]
    })
  ],
  filterFields: [
    new PageField({
      name: 'name'
    })
  ],
  gridFields: [
    new PageGridField({
      name: 'name',
      dataType: 'string'
    })
  ],
});

