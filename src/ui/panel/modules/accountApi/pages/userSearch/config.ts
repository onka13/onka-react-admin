// Auto generated file
import { PageConfig, PageField, PageFilterField, PageGridField, Validators } from 'onka-react-admin-core';
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
      name: 'name',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.maxLength(150)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'email',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.email, Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'passwordHash',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'emailConfirmed',
      displayInCreate: true,
      displayInEdit: true,
      enumName: 'YesNo',
      enum: accountApiEnums.YesNo,
      validators: [Validators.required, Validators.email],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'lockoutEndDateUtc',
      displayInCreate: true,
      displayInEdit: true,
      editComponent: CC.DateComponent,
      createComponent: CC.DateComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'accessFailedCount',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.NumberComponent,
      createComponent: CC.NumberComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'status',
      displayInCreate: true,
      displayInEdit: true,
      enumName: 'Status',
      enum: accountApiEnums.Status,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    })
  ],
  filterFields: [
    new PageFilterField({
      name: 'id',
      filterName: 'Id'
    }),
    new PageFilterField({
      name: 'name',
      filterName: 'Name'
    }),
    new PageFilterField({
      name: 'email',
      filterName: 'Email'
    }),
    new PageFilterField({
      name: 'emailConfirmed',
      filterName: 'EmailConfirmed',
      enumName: 'YesNo',
      enum: accountApiEnums.YesNo
    }),
    new PageFilterField({
      name: 'status',
      filterName: 'Status',
      enumName: 'Status',
      enum: accountApiEnums.Status
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

