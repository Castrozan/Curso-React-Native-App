import { Card, Button } from "react-native-paper";

export default function EditarJogador({
  image,
  title,
  titleStyle,
  children,
  buttonPress,
  ...props
}) {
  return (
    <Card {...props}>
      {image && <Card.Cover source={{ uri: image }} />}
      <Card.Title titleStyle={titleStyle} title={title} />
      {children && <Card.Content>{children}</Card.Content>}
      <Card.Actions>
        <Button mode="contained" onPress={buttonPress}>
          {buttonLabel}
        </Button>
      </Card.Actions>
    </Card>
  );
}
