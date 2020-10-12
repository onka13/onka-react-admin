﻿// Auto generated file
import { PageConfig, PageField, PageFilterField, PageGridField, Validators } from 'onka-react-admin-core';
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
      validators: [Validators.required, Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'email',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(200)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'pass',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.required, Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'language',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.maxLength(10)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'allowIpAddress',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'status',
      displayInCreate: true,
      displayInEdit: true,
      enumName: 'Status',
      enum: adminApiEnums.Status,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'no',
      displayInCreate: true,
      displayInEdit: true,
      validators: [Validators.maxLength(50)]
    }),
    new PageField({
      displayInDetail: true,
      name: 'theme',
      displayInCreate: true,
      displayInEdit: true,
      enumName: 'AdminUserTheme',
      enum: adminApiEnums.AdminUserTheme,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    }),
    new PageField({
      displayInDetail: true,
      name: 'isSuper',
      displayInCreate: true,
      displayInEdit: true,
      enumName: 'YesNo',
      enum: adminApiEnums.YesNo,
      validators: [Validators.required],
      editComponent: CC.SelectComponent,
      createComponent: CC.SelectComponent
    })
  ],
  filterFields: [
    new PageFilterField({
      name: 'name',
      filterName: 'Name'
    }),
    new PageFilterField({
      name: 'email',
      filterName: 'Email'
    }),
    new PageFilterField({
      name: 'status',
      filterName: 'Status',
      enumName: 'Status',
      enum: adminApiEnums.Status
    }),
    new PageFilterField({
      name: 'id',
      filterName: 'Id'
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

