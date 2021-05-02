// Auto generated file
import { PageConfig, PageField, PageGridField, Validators } from 'onka-react-admin-core';
import CC from '../../../../components/CustomComponents';
import accountApiEnums from '../../accountApiEnums';

export const pageConfig = new PageConfig({
  route: '/AccountApi/UserSearch',
  moduleKey: 'AccountApi',
  pageKey: 'User',
  menu: 'AccountApi',
  menuOrder: 0,
  hideMenu: false,
  get: true,
  edit: true,
  new: true,
  delete: false,
  export: true,
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
      validators: [Validators.required, Validators.maxLength(150)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'email',
      validators: [Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'passwordHash',
      validators: [Validators.required, Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'emailConfirmed',
      validators: [Validators.required],
      createComponent: CC.CheckboxComponent,
      editComponent: CC.CheckboxComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'lockoutEndDateUtc',
      createComponent: CC.DateComponent,
      editComponent: CC.DateComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'accessFailedCount',
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      createComponent: CC.NumberComponent,
      editComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      displayInCreate: true,
      displayInEdit: true,
      name: 'status',
      enumName: 'Status',
      enum: accountApiEnums.Status,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      createComponent: CC.SelectComponent,
      editComponent: CC.SelectComponent
    })
  ],
  filterFields: [
    new PageField({
      name: 'id',
      filterComponent: CC.NumberComponent
    }),
    new PageField({
      name: 'name'
    }),
    new PageField({
      name: 'email'
    }),
    new PageField({
      name: 'emailConfirmed',
      enumName: 'YesNo',
      enum: accountApiEnums.YesNo,
      filterComponent: CC.SelectComponent
    }),
    new PageField({
      name: 'status',
      enumName: 'Status',
      enum: accountApiEnums.Status,
      filterComponent: CC.SelectComponent
    })
  ],
  gridFields: [
    new PageGridField({
      name: 'id',
      isSortable: true,
      dataType: 'number'
    }),
    new PageGridField({
      name: 'name',
      dataType: 'string'
    }),
    new PageGridField({
      name: 'email',
      isSortable: true,
      dataType: 'string'
    }),
    new PageGridField({
      name: 'emailConfirmed',
      enumName: 'YesNo',
      enum: accountApiEnums.YesNo,
      dataType: 'string'
    }),
    new PageGridField({
      name: 'status',
      enumName: 'Status',
      enum: accountApiEnums.Status,
      dataType: 'number'
    })
  ],
});

