import React from 'react'
import "./style.css";
import "../../components/login/Login.comp"
import { Jumbotron } from 'react-bootstrap'
import { LoginForm } from '../../components/login/Login.comp';


export const Entry = () => {
    return (
        <div className="entry-page bg-info">
            <Jumbotron >
                <LoginForm />
            </Jumbotron>

        </div>
    )
}
