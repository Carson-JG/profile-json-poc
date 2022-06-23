import output from "../../../output.json";

export default function Output(props) {
  const { nameHook, titleHook, bioHook, eduHook, expHook, skillsHook } = props;
  const [name] = nameHook;
  const [title] = titleHook;
  const [bio] = bioHook;
  const [edu] = eduHook;
  const [exp] = expHook;
  const [skills] = skillsHook;

  return (
    <div>
      <h1>Output</h1>
      <pre>
        {JSON.stringify(
          {
            userInfo: {
              name,
              title,
              bio,
            },
            education: edu,
            experience: exp,
            skills: skills,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
