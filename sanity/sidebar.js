import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdHome } from 'react-icons/md';

export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      S.listItem()
        .title('Homepage')
        .icon(() => <MdHome />)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      ...S.documentTypeListItems().filter(
        item => item.getId() !== 'storeSettings'
      ),
    ]);
}
