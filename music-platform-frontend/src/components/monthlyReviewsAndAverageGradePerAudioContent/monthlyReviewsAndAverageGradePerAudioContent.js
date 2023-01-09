import React, {Component, useEffect, useState} from "react";
import AudioContentRepository from "../../repository/audioContentRepository";
import Container from "react-bootstrap/Container";
import {Col, Row, Table} from "react-bootstrap";

const MonthlyReviewsAndAverageGradePerAudioContent = () => {

    const [audioContents, setAudioContents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        AudioContentRepository.getAudioContentStats()
            .then((response) => {
                    setAudioContents(response.data)
                }
            );
    }


    return (
        <>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col xs={"6"}>
                        <Table striped border hover size={"sm"}>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Month</th>
                                <th>Total reviews</th>
                                <th>Average Grade</th>
                            </tr>
                            </thead>
                            <tbody>
                            {audioContents.map(ac => {
                                return (
                                    <tr>
                                        <td>{ac.title}</td>
                                        <td>{ac.year}</td>
                                        <td>{ac.month}</td>
                                        <td>{ac.totalReviews}</td>
                                        <td>{ac.averageGrade}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MonthlyReviewsAndAverageGradePerAudioContent;