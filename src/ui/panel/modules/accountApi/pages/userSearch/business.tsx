import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { LibService, GridBulkActionProp, GridRowExtraActionProp, SearchPage, UpsertPage, DetailPage, PageType } from 'onka-react-admin-core';
import { pageConfig } from './config';

const SearchRowActions = (props: GridRowExtraActionProp) => {
  return (
    <>{/*<Button size="small" variant="text" color="secondary">
          ...
        </Button>*/}</>
  );
};

const SearchBulkActions = (props: GridBulkActionProp) => (
  <>{/* <Button size="small" color="secondary">
      ... ({props.selections.length})
    </Button> */}</>
);

export const initialValues = {};

export function getFields(pageType: PageType, prefix?: string) {
  return LibService.instance().filterFields(pageConfig.fields, pageType, prefix);
}

function Search(params: any) {
  let gridFields = pageConfig.gridFields;
  let filterFields = pageConfig.filterFields;
  return SearchPage({ pageConfig, gridFields, filterFields, fields: pageConfig.fields });
}

function Detail(params: any) {
  let fields = getFields('detail');
  return DetailPage({ pageConfig, fields });
}

function Upsert(params: any) {
  const { id } = useParams<{ id: any }>();
  const isEdit = !!id;
  let fields = getFields(isEdit ? 'edit' : 'create');
  return UpsertPage({ pageConfig, fields, initialValues });
}

export { Search, Detail, Upsert };
