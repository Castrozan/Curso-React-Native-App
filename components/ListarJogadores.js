import { Card, Button } from "react-native-paper";

export default function ListarJogadores({
  image,
  title,
  titleStyle,
  children,
  buttonLabel,
  buttonPress,
  ...props
}) {
  return (
    <Card {...props}>
      {image && <Card.Cover source={{ uri: image }} />}
      <Card.Title titleStyle={titleStyle} title={title} />
      {children && <Card.Content>{children}</Card.Content>}
      <Card.Content>
        {buttonLabel && <Button mode="contained" onPress={buttonPress}> {buttonLabel} </Button>}
      </Card.Content>
    </Card>
  );
}
