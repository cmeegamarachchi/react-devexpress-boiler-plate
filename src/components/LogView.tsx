import React, {useEffect, useRef, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';
import {data} from '../data';
import {ScrollView} from 'devextreme-react';

const useStyles = makeStyles<Theme>((theme: Theme) =>
    createStyles({
        root: {
            height: theme.spacing(60),
            maxHeight: theme.spacing(60),
            overflow: 'scroll',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            paddingLeft: theme.spacing(1),
        },
        item: {
            width: '100%'
        }
    })
);


const LogView:React.FC = () => {
    const classes = useStyles();
    const [logs] = useState(data);
    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom();
    }, []);

    return <ScrollView className={classes.root} useNative={true}>
        {logs.map((line, index) => <><span key={index} className={classes.item}>{line}</span><br/></>)}
        <div ref={messagesEndRef} />
    </ScrollView>
}

export default LogView;