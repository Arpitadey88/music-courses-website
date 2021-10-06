import React from 'react';
import { Button, Card } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="mx-5 my-5">
            <Card>
                <h3 className="ps-3">Error 404 – Page Not Found!</h3>
                <Card.Body>
                    <Card.Title>The page you requested is no longer here!</Card.Title>
                    <Card.Text>
                        Visit the Home Page
                        In order to improve our service, can you inform us that someone else has an incorrect link to our site?
                        Report broken link
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NotFound;