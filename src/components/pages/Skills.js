import { Select, Col, Row, Input } from "antd";
import { nanoid } from "nanoid";

import inputUserData from "../../../input.json";

const { Option } = Select;

const skills = inputUserData.skills.map(skill => {
  const { name } = skill;
  return {
    id: nanoid(),
    skill: name,
  };
});

const options = skills.map(({ id, skill }) => {
  return (
    <Option key={id} value={id}>
      {skill}
    </Option>
  );
});

function Skills(props) {
  const { skillsHook } = props;
  const [selectedSkills, setSkills] = skillsHook;

  return (
    <div>
      <h3>Skills</h3>
      <Row>
        <Col span={12}>
          <Select
            mode="multiple"
            value={selectedSkills.map(({ id }) => id)}
            onChange={ids => {
              const selected = skills.filter(({ id }) => ids.includes(id));
              setSkills([...selected]);
            }}
            style={{ width: "100%" }}
          >
            {options}
          </Select>
        </Col>
        <Col span={12}>
          <ul>
            {selectedSkills.map(({ id, skill }) => {
              return (
                <li key={id}>
                  <Input
                    value={skill}
                    onChange={e => {
                      const { value } = e.target;
                      const skillItem = selectedSkills.find(
                        skill => skill.id === id
                      );
                      skillItem.skill = value;
                      setSkills([...selectedSkills]);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
