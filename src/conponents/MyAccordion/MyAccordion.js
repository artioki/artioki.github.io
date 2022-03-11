import React, { Children } from 'react';
import {Accordion} from "react-bootstrap"
import styled from 'styled-components'
import css from "./MyAccordion.module.scss"
const Styles = styled.div`


.accordion-button:not(.collapsed) {
    color: #000;
    background-color: #fff;
    // box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
    box-shadow:none;
}
.accordion-button.collapsed {
    color: #000;
    background-color: #fff;
    box-shadow: none;
}

.accordion-button:focus {
    z-index: 3;
    border-color: #fff;
}
.accordion-body {
    padding-top: 0px;
}

`;
const MyAccordion = (props) => {

    return (
        <Styles>
            <Accordion defaultActiveKey="0">
            <Accordion.Item  eventKey="0">
                <Accordion.Header>
                    <div className={css.boxTitle}>
                        <div>
                            {props.title}
                        </div>
                        <div>
                            {props.date ? props.date +" ago" : null } 
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {props.children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Styles>
    );
}

export default MyAccordion;
