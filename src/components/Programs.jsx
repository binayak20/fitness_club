import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { programs } from "../data";
import Card from "../UI/Card";
import SectionHead from "./SectionHead";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />
        <div className="programs__wraper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs_program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn more
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
