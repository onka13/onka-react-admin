// Auto generated file
import { PageConfig, PageField, PageGridField, Validators } from 'onka-react-admin-core';
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
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'email',
      validators: [Validators.required, Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'pass',
      validators: [Validators.required, Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'language',
      validators: [Validators.maxLength(10)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'allowIpAddress',
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'status',
      enumName: 'Status',
      enum: adminApiEnums.Status,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      createComponent: CC.SelectComponent,
      editComponent: CC.SelectComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'no',
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'theme',
      enumName: 'AdminUserTheme',
      enum: adminApiEnums.AdminUserTheme,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      createComponent: CC.SelectComponent,
      editComponent: CC.SelectComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'isSuper',
      validators: [Validators.required],
      createComponent: CC.CheckboxComponent,
      editComponent: CC.CheckboxComponent
    })
  ],
  filterFields: [
    new PageField({
      name: 'name'
    }),
    new PageField({
      name: 'email'
    }),
    new PageField({
      name: 'status',
      enumName: 'Status',
      enum: adminApiEnums.Status,
      filterComponent: CC.SelectComponent
    }),
    new PageField({
      name: 'id',
      filterComponent: CC.NumberComponent
    })
  ],
  gridFields: [
    new PageGridField({
      name: 'no',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'name',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'email',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'status',
      enumName: 'Status',
      enum: adminApiEnums.Status,
      dataType: 'number'
    }),
    new PageGridField({
      name: 'isSuper',
      enumName: 'YesNo',
      enum: adminApiEnums.YesNo,
      dataType: 'string'
    })
  ],
});

