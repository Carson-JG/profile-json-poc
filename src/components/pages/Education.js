import { useState } from "react";
import { Col, Row, Select, Input } from "antd";
import { nanoid } from "nanoid";
import inputUserData from "../../../input.json";
const { attendedConnection } = inputUserData;
const { edges } = attendedConnection;

const sourceEducation = edges.map(edge => {
  const { educationName } = edge.node;
  const { degreeName } = edge;
  return {
    id: nanoid(),
    school: educationName,
    degree: degreeName,
  };
});

const { Option } = Select;

const options = sourceEducation.map(({ id, school, degree }) => {
  return (
    <Option key={id} value={id}>
      {school}, {degree}
    </Option>
  );
});

function Education(props) {
  const { eduHook } = props;
  const [edu, setEdu] = eduHook;

  return (
    <div>
      <h3>Education</h3>

      <Row>
        <Col span={12}>
          <Select
            mode="multiple"
            value={edu.map(({ id }) => id)}
            onChange={ids => {
              const selected = sourceEducation.filter(({ id }) =>
                ids.includes(id)
              );
              setEdu([...selected]);
            }}
            style={{ width: "100%" }}
          >
            {options}
          </Select>
        </Col>
        <Col span={12}>
          <ul>
            {edu.map(({ id, school, degree }) => {
              const SchoolInput = (
                <Input
                  addonBefore="School"
                  value={school}
                  onChange={e => {
                    const { value } = e.target;
                    const eduItem = edu.find(edu => edu.id === id);
                    eduItem.school = value;
                    setEdu([...edu]);
                  }}
                />
              );
              const DegreeInput = (
                <Input
                  addonBefore="Degree"
                  value={degree}
                  onChange={e => {
                    const { value } = e.target;
                    const eduItem = edu.find(edu => edu.id === id);
                    eduItem.degree = value;
                    setEdu([...edu]);
                  }}
                />
              );
              return (
                <li key={id}>
                  {SchoolInput}
                  {DegreeInput}
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
