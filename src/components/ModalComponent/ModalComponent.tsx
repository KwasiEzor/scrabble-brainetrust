import { Button, Modal, Badge } from "flowbite-react";
import React, { useState, useEffect } from "react";
import Club from "../../types/Club";
import { IconType } from "react-icons";

type ModalComponentProps<T> = {
  club?: Club;
  data?: T | undefined;
  icon?: IconType | undefined;
  label?: string | undefined;
};

const ModalComponent: React.FC<ModalComponentProps<Club | unknown>> = ({
  label,
  club,
  data,
  icon: Icon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  console.log(data);
  return (
    <React.Fragment>
      <Button size={"xs"} onClick={onClick}>
        {label ?? "modal"}
        {Icon && (
          <span>
            <Icon size={24} />
          </span>
        )}
      </Button>
      <Modal {...props} dismissible={true} show={isOpen} onClose={onClose}>
        <Modal.Header className="uppercase font-semibold tracking-wide text-blue-500">
          {club?.name}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <ul className="space-y-4">
              <li>
                <p>
                  Email: <span className="text-blue-500">{club?.email}</span>{" "}
                </p>
              </li>
              <li>
                <p>
                  Personne de contact :{" "}
                  <span className="font-bold">{club?.contact_person}</span>
                </p>
              </li>
              <li>
                <p className="flex items-center gap-3">
                  <span>Jour d'entrainement : </span>
                  <Badge>{club?.training_day}</Badge>
                </p>
              </li>
              <li>
                <p className="flex items-center gap-3">
                  <span>Heure d'entrainement : </span>
                  <Badge color={"warning"}>{club?.training_time}</Badge>
                </p>
              </li>
              {club?.mobile_number && (
                <li>
                  <p>
                    GSM. <span>{club?.mobile_number}</span>
                  </p>
                </li>
              )}
              {club?.phone_number && (
                <li>
                  <p>
                    Tel. <span>{club?.phone_number}</span>
                  </p>
                </li>
              )}
            </ul>

            {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={onClick}>I accept</Button> */}
          <Button color="gray" onClick={onClick}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
