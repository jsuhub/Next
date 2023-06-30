import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/react'
import { Fragment, useState } from 'react'
import 'bytemd/dist/index.css'
import Nav from '@/components/Nav/Nav'
import style from './Editor.module.css';
const plugins = [
    gfm(),
    // Add more plugins here
]

export default function Md() {
    const [value, setValue] = useState('')

    return (
        <Fragment>
            <Nav></Nav>
            <div className={style.main}>
                <Editor
                    mode='auto'
                    value={value}
                    plugins={plugins}
                    onChange={(v) => {
                        setValue(v)
                    }}
                />
            </div>
        </Fragment>
    )
}
