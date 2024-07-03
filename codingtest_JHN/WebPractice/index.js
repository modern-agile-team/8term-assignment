const [text, setText] = useState("");
const [name, setName] = useState("");
const onChange = (e) => {
    setText(e.target.value);
}

const onClick = () => {
    setName(text);
    console.log(name)
}