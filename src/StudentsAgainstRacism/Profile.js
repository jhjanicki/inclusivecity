import React, { useContext } from 'react';
import { URLStateContext } from '../URLStateContext';
import {student_translations} from "./translations";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Profile.scss";


export const Profile = ({  }) => {


  const {language} = useContext(URLStateContext);
//   let numRows = student_translations.students[language].length;


  return (
    <Container>
         <Row className="row">
            {student_translations.students[language].map(function(d,i){
                    if(i<3){
                        return (
                            <Col className="profile column">
                                <img className="profileImg" src="student.svg" />
                                <h3>{d.name}</h3>
                                <p>{d.description}</p>
                            </Col>
                        )
                    }
                })
            }
        </Row>
        <Row className="row">
            {student_translations.students[language].map(function(d,i){
                    if(i>=3){
                        return (
                            <Col className="profile column">
                                <img className="profileImg" src="student.svg" />
                                <h3>{d.name}</h3>
                                <p>{d.description}</p>
                            </Col>
                        )
                    }
                })
            }
        </Row>
    </Container>
  );
};
