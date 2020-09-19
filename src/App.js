import React from "react";

import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  PanelHeaderContent,
  Group,
  Button,
  Div,
  Cell,
  Card,
  Separator,
  HorizontalScroll,
  Switch,
  Avatar,
  Tabs,
  TabsItem,
  CardGrid,
  SimpleCell,
  Text,
  Tabbar,
  TabbarItem,
  FixedLayout,
  Search,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Icon24Done from "@vkontakte/icons/dist/24/done";
import Icon16Dropdown from "@vkontakte/icons/dist/16/dropdown";
import Icon28SmileOutline from "@vkontakte/icons/dist/28/smile_outline";
import Icon28AddOutline from "@vkontakte/icons/dist/28/add_outline";
import Icon28CameraOutline from "@vkontakte/icons/dist/28/camera_outline";
import Icon28UserOutline from "@vkontakte/icons/dist/28/user_outline";
import Icon28GlobeOutline from "@vkontakte/icons/dist/28/globe_outline";
import Icon28NewsfeedOutline from "@vkontakte/icons/dist/28/newsfeed_outline";
import Icon28ServicesOutline from "@vkontakte/icons/dist/28/services_outline";
import Icon28MessageOutline from "@vkontakte/icons/dist/28/message_outline";
import Icon28ClipOutline from "@vkontakte/icons/dist/28/clip_outline";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/user_circle_outline";
import Icon24DismissSubstract from '@vkontakte/icons/dist/24/dismiss_substract';
import "./App.css";

function App() {
  const [currentPanel, setCurrentPanel] = React.useState("feed");
  const [moods, setMoods] = React.useState([
    {
      id: 0,
      title: "Карантин",
      isActive: true,
    },
    {
      id: 1,
      title: "Работа",
      isActive: false,
    },
    {
      id: 2,
      title: "Юмор",
      isActive: false,
    },
    {
      id: 3,
      title: "IT",
      isActive: false,
    },
    {
      id: 4,
      title: "Спорт",
      isActive: true,
    },
    {
      id: 5,
      title: "Учеба",
      isActive: false,
    },
    {
      id: 6,
      title: "Скучно",
      isActive: false,
    },
    {
      id: 7,
      title: "Засыпаю",
      isActive: false,
    },
  ]);
  const [visible, setVisible] = React.useState(false);

  const setActiveMood = (id) => {
    const newMoods = moods.map((mood) => {
      {
        if (mood.id === id) {
          mood.isActive = true;
        } else {
          mood.isActive = false;
        }
      }
      return mood;
    });
    setMoods(newMoods);
  };

  return (
    <View activePanel={currentPanel}>
      <Panel id="createPost">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setCurrentPanel("feed")} />}
          right={
            <PanelHeaderButton onClick={() => setCurrentPanel("feed")}>
              <Icon24Done height={28} width={28} />
            </PanelHeaderButton>
          }
        >
          <PanelHeaderContent aside={<Icon16Dropdown />}>
            Марк Никерин
          </PanelHeaderContent>
        </PanelHeader>
        <Group>
          <Div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <textarea
              style={{
                fontSize: "16px",
                width: "100%",
                height: "50vh",
                marginBottom: "20vh",
                border: "none",
                outline: "none",
              }}
              placeholder="Начните вводить текст"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </textarea>
          </Div>
          <HorizontalScroll>
            <div style={{ display: "flex" }}>
              <Button
                style={{
                  marginLeft: "12px",
                  marginRight: "12px",
                  width: "200px",
                  borderColor: "#E1E3E6",
                  color: "#818C99",
                }}
                mode="outline"
                after={<Icon16Dropdown />}
                onClick={() => {
                  setVisible(true);
                }}
              >
                Настроение
              </Button>
            </div>
          </HorizontalScroll>
          <Div></Div>
          <Separator wide />
          {visible === true && (
            <>
              <Group
                style={{
                  height: "100vh",
                  width: "100vw",
                  position: "fixed",
                  bottom: "0px",
                  backgroundColor: "RGBA(0, 0, 0, 0.5)",
                }}
                onClick={() => {
                  setVisible(false);
                }}
              />
              <Div
                style={{
                  position: "fixed",
                  width: "100vw",
                  background: "#ffffff",
                  bottom: "0px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  boxSizing: "border-box",
                  paddingRight: "0px",
                }}
              >
                <Div style={{ fontWeight: "600" }}>Выберите настроение</Div>
                <HorizontalScroll>
                  <Div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft: "-14px",
                    }}
                  >
                    {moods.map((mood) => {
                      return mood.isActive ? (
                        <div
                          key={mood.id}
                          style={{
                            display: "flex",
                            margin: "12px",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            setActiveMood(mood.id);
                          }}
                        >
                          <Avatar
                            style={{
                              background: "#ffffff",
                              border: "1px solid #3F8AE0",
                            }}
                            size={54}
                            shadow={false}
                          >
                            <Icon28SmileOutline fill="#3F8AE0" />
                          </Avatar>
                          <span>{mood.title}</span>
                        </div>
                      ) : (
                        <div
                          key={mood.id}
                          style={{
                            display: "flex",
                            margin: "12px",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                          onClick={() => {
                            setActiveMood(mood.id);
                          }}
                        >
                          <Avatar
                            style={{
                              background: "#ffffff",
                              border: "1px solid #E1E3E6",
                            }}
                            size={54}
                            shadow={false}
                          >
                            <Icon28SmileOutline fill="#3F8AE0" />
                          </Avatar>
                          <span>{mood.title}</span>
                        </div>
                      );
                    })}
                  </Div>
                </HorizontalScroll>
                <Div
                  style={{
                    padding: "16px 0",
                    marginRight: "16px",
                  }}
                >
                  <Cell asideContent={<Switch />}>
                    Добавить на карту настроений
                  </Cell>
                  <Div></Div>
                  <Button
                    size="xl"
                    onClick={() => {
                      setVisible(false);
                    }}
                  >
                    Готово
                  </Button>
                </Div>
              </Div>
            </>
          )}
        </Group>
      </Panel>
      <Panel id="feed">
        <FixedLayout>
          <Tabbar style={{ zIndex: "77", background: "#ffffff" }}>
            <TabbarItem selected={true} data-story="feed" text="Новости">
              <Icon28NewsfeedOutline />
            </TabbarItem>
            <TabbarItem data-story="services" text="Сервисы">
              <Icon28ServicesOutline />
            </TabbarItem>
            <TabbarItem data-story="messages" label="12" text="Сообщения">
              <Icon28MessageOutline />
            </TabbarItem>
            <TabbarItem data-story="clips" text="Клипы">
              <Icon28ClipOutline />
            </TabbarItem>
            <TabbarItem data-story="profile" text="Профиль">
              <Icon28UserCircleOutline />
            </TabbarItem>
          </Tabbar>
        </FixedLayout>
        <PanelHeader
          left={
            <PanelHeaderButton>
              <Icon28CameraOutline />
            </PanelHeaderButton>
          }
          right={
            <PanelHeaderButton>
              <Icon28AddOutline />
            </PanelHeaderButton>
          }
          separator={true}
        >
          <Tabs>
            <TabsItem
              selected={true}
              after={<Icon16Dropdown fill="var(--accent)" />}
            >
              Новости
            </TabsItem>
            <TabsItem selected={false}>Интересное</TabsItem>
          </Tabs>
        </PanelHeader>
        <Icon28GlobeOutline
          fill="#ffffff"
          width={32}
          height={32}
          style={{
            zIndex: "99",
            padding: "5px",
            background: "#3F8AE0",
            borderRadius: "50%",
            position: "fixed",
            bottom: "70px",
            right: "30px",
          }}
          onClick={() => {
            setCurrentPanel("moodMap");
          }}
        ></Icon28GlobeOutline>
        <Div style={{ zIndex: "1" }}>
          <CardGrid style={{ bottom: "56px" }}>
            <Card
              size="l"
              mode="outline"
              onClick={() => setCurrentPanel("createPost")}
            >
              <Group>
                <SimpleCell
                  before={
                    <Avatar>
                      <Icon28UserOutline></Icon28UserOutline>
                    </Avatar>
                  }
                >
                  <Text weight="semibold">Марк Никерин</Text>
                </SimpleCell>
                <Div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Div>
                <Div></Div>
              </Group>
            </Card>
            <Card
              size="l"
              mode="outline"
              onClick={() => setCurrentPanel("createPost")}
            >
              <Group>
                <SimpleCell
                  before={
                    <Avatar>
                      <Icon28UserOutline></Icon28UserOutline>
                    </Avatar>
                  }
                >
                  <Text weight="semibold">Марк Никерин</Text>
                </SimpleCell>
                <Div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Div>
                <Div></Div>
              </Group>
            </Card>
            <Card
              size="l"
              mode="outline"
              onClick={() => setCurrentPanel("createPost")}
            >
              <Group>
                <SimpleCell
                  before={
                    <Avatar>
                      <Icon28UserOutline></Icon28UserOutline>
                    </Avatar>
                  }
                >
                  <Text weight="semibold">Марк Никерин</Text>
                </SimpleCell>
                <Div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Div>
                <Div></Div>
              </Group>
            </Card>
          </CardGrid>
        </Div>
      </Panel>
      <Panel id="moodMap">
        <Icon24DismissSubstract fill="RGBA(0,0,0,0.5)"
          width={32}
          height={32}
          style={{
            zIndex: "99",
            background: "#FFFFFF",
            borderRadius: "50%",
            position: "fixed",
            top: "30px",
            right: "30px",
          }}
          onClick={() => {
            setCurrentPanel("feed");
          }}></Icon24DismissSubstract>
        <YMaps
          query={{
            ns: "use-load-option",
            apikey: "c27f119f-4abb-4015-8b10-6fbe8c74a51c",
          }}
        >
          <Map
            modules={["geolocation", "geocode", "geoObject.addon.hint"]}
            width={"100vw"}
            height={"100vh"}
            defaultState={{
              center: [55.75, 37.57],
              zoom: 11,
            }}
          >
            <Placemark
              key={1}
              geometry={[55.751, 37.569]}
              options={{
                preset: "islands#circleIcon",
                iconColor: "#3caa3c",
              }}
              properties={{ hintContent: "dsfaaaaaaaaaaaaaa" }}
              onClick={() => setCurrentPanel("moodFeed")}
            />
            <Placemark
              key={2}
              geometry={[55.764, 37.581]}
              options={{
                preset: "islands#circleIcon",
                iconColor: "#3caa3c",
              }}
              properties={{ hintContent: "dsfds" }}
              onClick={() => setCurrentPanel("moodFeed")}
            />
          </Map>
        </YMaps>
        <Div
          style={{
            position: "fixed",
            background: "#ffffff",
            borderTopRightRadius: "15px",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            borderTopLeftRadius: "15px",
            width: "100vw",
            bottom: "0px",
            right: "0px",
            padding: "0px",
          }}
        >
          <Div></Div>
          <Search after={null} />
          <HorizontalScroll>
            <Div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {moods.map((mood) => {
                return mood.isActive ? (
                  <div
                    key={mood.id}
                    style={{
                      display: "flex",
                      margin: "6px",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setActiveMood(mood.id);
                    }}
                  >
                    <Avatar
                      style={{
                        background: "#ffffff",
                        border: "1px solid #3F8AE0",
                      }}
                      size={54}
                      shadow={false}
                    >
                      <Icon28SmileOutline fill="#3F8AE0" />
                    </Avatar>
                    <span>{mood.title}</span>
                  </div>
                ) : (
                  <div
                    key={mood.id}
                    style={{
                      display: "flex",
                      margin: "6px",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setActiveMood(mood.id);
                    }}
                  >
                    <Avatar
                      style={{
                        background: "#ffffff",
                        border: "1px solid #E1E3E6",
                      }}
                      size={54}
                      shadow={false}
                    >
                      <Icon28SmileOutline fill="#3F8AE0" />
                    </Avatar>
                    <span>{mood.title}</span>
                  </div>
                );
              })}
            </Div>
          </HorizontalScroll>
        </Div>
      </Panel>
      <Panel id="moodFeed">
        <FixedLayout>
          <Tabbar style={{ zIndex: "77", background: "#ffffff" }}>
            <TabbarItem selected={true} data-story="feed" text="Новости">
              <Icon28NewsfeedOutline />
            </TabbarItem>
            <TabbarItem data-story="services" text="Сервисы">
              <Icon28ServicesOutline />
            </TabbarItem>
            <TabbarItem data-story="messages" label="12" text="Сообщения">
              <Icon28MessageOutline />
            </TabbarItem>
            <TabbarItem data-story="clips" text="Клипы">
              <Icon28ClipOutline />
            </TabbarItem>
            <TabbarItem data-story="profile" text="Профиль">
              <Icon28UserCircleOutline />
            </TabbarItem>
          </Tabbar>
        </FixedLayout>
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setCurrentPanel("moodMap")} />}
        >
          Лента настроения
        </PanelHeader>
        <Div style={{ zIndex: "1" }}>
          <CardGrid style={{ bottom: "56px" }}>
            <Card
              size="l"
              mode="outline"
            >
              <Group>
                <SimpleCell
                  before={
                    <Avatar>
                      <Icon28UserOutline></Icon28UserOutline>
                    </Avatar>
                  }
                >
                  <Text weight="semibold">Сергей Андреев</Text>
                </SimpleCell>
                <Div>
                  Как же здесь круто! Очень классное место!
                </Div>
                <Div></Div>
              </Group>
            </Card>
            <Card
              size="l"
              mode="outline"
            >
              <Group>
                <SimpleCell
                  before={
                    <Avatar>
                      <Icon28UserOutline></Icon28UserOutline>
                    </Avatar>
                  }
                >
                  <Text weight="semibold">Дмитрий Иванов</Text>
                </SimpleCell>
                <Div>
                  Наконец-то я защитил диплом! 4 года тяжелой учебы позади, а впереди - новая жизнь!
                </Div>
                <Div></Div>
              </Group>
            </Card>
            <Card
              size="l"
              mode="outline"
            >
              <Group>
                <SimpleCell
                  before={
                    <Avatar>
                      <Icon28UserOutline></Icon28UserOutline>
                    </Avatar>
                  }
                >
                  <Text weight="semibold">Марк Никерин</Text>
                </SimpleCell>
                <Div>
                  Вот и заканчивается хакатон Вездекод от ВКонтакте! Очень интересный опыт, спасибо организаторам и проверяющим за их труд!))
                </Div>
                <Div></Div>
              </Group>
            </Card>
          </CardGrid>
        </Div>
      </Panel>
    </View>
  );
}

export default App;
