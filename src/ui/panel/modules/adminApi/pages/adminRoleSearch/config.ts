// Auto generated file
import { PageConfig, PageField, Validators } from 'onka-react-admin-core';
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
  primaryKeys: ['id'],
  fields: [
    new PageField({
    inDetail: true,
      name: 'id',
      isSortable: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.NumberComponent,
      createComponent: CC.NumberComponent
    }),
    new PageField({
    inDetail: true,
      name: 'name',
      isCreatable: true,
      isEditable: true,
      inFilter: true,
      inGrid: true,
      validators: [Validators.required, Validators.maxLength(200)]
    })
  ],
});

