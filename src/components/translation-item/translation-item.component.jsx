import React from 'react';

const TranslationItem = ({ id, sourceLang, targetLang, input, translation, engineId }) => (
    <tr className='translation-item'>
        <td>{ id }</td>
        <td> { translation } ({ targetLang })</td>
        <td> { input } ({ sourceLang })</td>
        <td>{ engineId }</td>
    </tr>
);
export default TranslationItem;