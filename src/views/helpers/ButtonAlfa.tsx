import React from 'react';
import {Attach} from "arui-feather/attach";

function ButtonAlfa() {
    return (
        <div>
            {
                // ['s', 'm', 'l', 'xl'].map(size => (
                    <div id="idddddd"
                         className='row'
                         key='m'
                    >
                        <div className='column'>
                            <Attach noFileText='' size='m'  />
                        </div>

                        <div className='column'>
                            <Attach size='m' noFileText='' disabled={ true } />
                        </div>
                    </div>
                // )
                // )
            }
        </div>
    );
}

export default ButtonAlfa;
