import { Card, Button } from "react-native-paper";
import { StyleSheet } from 'react-native';


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
        {buttonLabel && <Button style={styles.button} mode="contained" onPress={buttonPress}> {buttonLabel} </Button>}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#41825f',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: '5%'
  }

})