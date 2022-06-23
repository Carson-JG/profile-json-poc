import inputUserData from "../../../input.json";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Layout } from "antd";

import * as Pages from "../pages";

export default function Content({}) {
  const nameHook = useState(inputUserData.name);
  const titleHook = useState(inputUserData.tense_title);
  const bioHook = useState(inputUserData.biography);
  const eduHook = useState([]);
  const expHook = useState([]);
  const skillsHook = useState([]);

  return (
    <Layout.Content style={{ padding: "0 50px" }}>
      <div
        style={{
          minHeight: "100%",
          padding: "24px",
          background: "#fff",
        }}
      >
        <Switch>
          <Route path="/experience">
            <Pages.Experience expHook={expHook} />
          </Route>

          <Route path="/output">
            <Pages.Output
              nameHook={nameHook}
              titleHook={titleHook}
              bioHook={bioHook}
              eduHook={eduHook}
              expHook={expHook}
              skillsHook={skillsHook}
            />
          </Route>

          <Route path="/">
            <Pages.UserInfo
              nameHook={nameHook}
              titleHook={titleHook}
              bioHook={bioHook}
            />
            <Pages.Education eduHook={eduHook} />

            <Pages.Skills skillsHook={skillsHook} />
          </Route>
        </Switch>
      </div>
    </Layout.Content>
  );
}
