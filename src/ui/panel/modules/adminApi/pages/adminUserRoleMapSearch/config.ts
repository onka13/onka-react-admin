// Auto generated file
import { PageConfig, PageField, PageGridField, Validators } from 'onka-react-admin-core';
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
      name: 'userId',
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
      reference: {
        route: 'AdminApi/AdminRoleSearch',
        filterField: 'name',
        dataField: 'role',
      },
      createComponent: CC.ReferenceComponent,
      editComponent: CC.ReferenceComponent
    })
  ],
  filterFields: [
    new PageField({
      name: 'userId',
      filterComponent: CC.NumberComponent
    }),
    new PageField({
      name: 'roleId',
      filterComponent: CC.ReferenceComponent,
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

