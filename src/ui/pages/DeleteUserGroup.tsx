import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigation, useParams } from "react-router-dom";
import { deleteUserGroup } from "../../common/services/delete-user-groups";
export function DeleteUserGroup() {
  const { userGroupToken } = useParams();
  const navigate = useNavigation();
  useEffect(() => {
    deleteUserGroup(userGroupToken).then((res) => {
      console.log({ res });
    });
  }, []);

  return (
    <Container>
      <Row className="p-4">
        <Col md={12} className=" justify-content-center">
          <h2
            style={{
              fontSize: "3rem",
            }}
          >
            Has dejado de recibir notificaciones de carewatch
          </h2>

          <p
            style={{
              fontSize: "1.3rem",
            }}
          >
            Para volver a tener notificaciones de carewatch, dile al
            administrador de tu grupo que te vuelva a agregar. Puedes cerrar
            esta ventana
          </p>
        </Col>
      </Row>
    </Container>
  );
}
