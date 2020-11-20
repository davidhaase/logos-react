import React from 'react';

import TranslationItem from '../translation-item/translation-item.component';

import './translation-history.styles.css';

import TRANSLATION_DATA from './translation.data.js';

class TranslateHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translations: TRANSLATION_DATA
        };
    }
    componentDidMount() {
        fetch('/translations')
          .then(response => response.json())
          .then(data => this.setState({ translations: data.list }));
      }

    render () {
        const {translations} = this.state;
        return (
            <div className='translation-history-table'>
                <table>
                    <tr>
                        <th>Source Text</th>
                        <th>Translation</th>
                        <th>Engine</th>
                        <th>Direction</th>
                    </tr>
                    {
                        translations.map((translation) => (
                            
                        <tr>
                            <td>{ translation.input_string }</td>
                            <td>{ translation.output_string }</td>
                            <td>{ translation.build_display_name }</td>
                            <td>{ translation.source_lang_en } to { translation.target_lang_en }</td>
                        </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
};

export default TranslateHistory;