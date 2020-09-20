// Auto generated file
import { PageConfig, PageField, Validators } from 'onka-react-admin-core';
import CC from '../../../../components/CustomComponents';
import adminApiEnums from '../../adminApiEnums';

export const pageConfig = new PageConfig({
  route: '/AdminApi/AdminUserSearch',
  moduleKey: 'AdminApi',
  pageKey: 'AdminUser',
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
      inFilter: true,
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
    }),
    new PageField({
    inDetail: true,
      name: 'email',
      isCreatable: true,
      isEditable: true,
      inFilter: true,
      inGrid: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(200)]
    }),
    new PageField({
    inDetail: true,
      name: 'pass',
      isCreatable: true,
      isEditable: true,
      validators: [Validators.required, Validators.maxLength(50)]
    }),
    new PageField({
    inDetail: true,
      name: 'language',
      isCreatable: true,
      isEditable: true,
      validators: [Validators.maxLength(10)]
    }),
    new PageField({
    inDetail: true,
      name: 'allowIpAddress',
      isCreatable: true,
      isEditable: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
    inDetail: true,
      name: 'status',
      isCreatable: true,
      isEditable: true,
      inFilter: true,
      enumName: 'Status',
      enum: adminApiEnums.Status,
      inGrid: true,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    }),
    new PageField({
    inDetail: true,
      name: 'no',
      isCreatable: true,
      isEditable: true,
      inGrid: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
    inDetail: true,
      name: 'theme',
      isCreatable: true,
      isEditable: true,
      enumName: 'AdminUserTheme',
      enum: adminApiEnums.AdminUserTheme,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    }),
    new PageField({
    inDetail: true,
      name: 'isSuper',
      isCreatable: true,
      isEditable: true,
      enumName: 'YesNo',
      enum: adminApiEnums.YesNo,
      inGrid: true,
      validators: [Validators.required],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    })
  ],
});

