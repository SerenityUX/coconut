import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [isNativeShare, setNativeShare] = useState(false);


  const pickupContent = {
    Sports: {
      Football: "Are you a football player? Because you’re tackling my heart.",
      Basketball:
        "Are you a basketball player? Because you’re slam dunking my heart.",
      Baseball:
        "Are you a baseball player? Because you’re hitting a home run with me.",
      Soccer: "Are you a soccer player? Because you’ve got me on the field.",
      Tennis: "Are you a tennis player? Because you’re serving up love.",
      Golf: "Are you a golfer? Because you’ve got my heart on the green.",
      Swimming: "Are you a swimmer? Because you’re diving into my heart.",
      Skiing: "Are you a skier? Because you’re taking me on a slope of love.",
      Snowboarding: "Are you a snowboarder? Because you’re shredding my heart.",
      Surfing: "Are you a surfer? Because you’re riding my waves.",
    },
    Music: {
      Rock: "Are you a rock musician? Because you’re rocking my world.",
      Pop: "Are you a pop musician? Because you’re making my heart beat fast.",
      "Hip hop":
        "Are you a hip hop artist? Because you’re rapping up my heart.",
      Rap: "Are you a rap artist? Because you’re spitting game at me.",
      Country:
        "Are you a country musician? Because you’re making my heart go twang.",
      Jazz: "Are you a jazz musician? Because you’re making my heart swing.",
      Classical:
        "Are you a classical musician? Because you’re making my heart sing.",
      Blues:
        "Are you a blues musician? Because you’re giving me the blues in a good way.",
      Electronic:
        "Are you an electronic musician? Because you’re electrifying my heart.",
      Folk: "Are you a folk musician? Because you’re plucking at my heartstrings.",
    },
    Art: {
      Painting: "Are you a painter? Because you’re adding color to my life.",
      Drawing: "Are you an artist? Because you’re drawing me in.",
      Sculpture: "Are you a sculptor? Because you’re shaping my world.",
      Photography: "Are you a photographer? Because you’ve captured my heart.",
      Printmaking:
        "Are you a printmaker? Because you’re making an impression on me",
      "Graphic design":
        "Are you a graphic designer? Because you’re making me visual.",
      Illustration:
        "Are you an illustrator? Because you’re making my life a work of art.",
      Animation:
        "Are you an animator? Because you’re bringing my world to life.",
      Film: "Are you a filmmaker? Because you’re making my heart reel.",
      Theater: "Are you an actor? Because you’re stealing the show in my life.",
    },
    Traveling: {
      "Beach vacations":
        "Do you mind if we go on a beach vacation and get a little sandy?",
      Sightseeing:
        "Do you mind if we go sightseeing and explore the world together?",
      "Adventure travel":
        "Do you mind if we go on an adventure and see where life takes us?",
      "Nature trips":
        "Do you mind if we go on a nature trip and get a little wild?",
      "Cultural exchange":
        "Do you mind if we go on a cultural exchange and broaden our horizons?",
      "Road trips":
        "Do you mind if we go on a road trip and see where the road takes us?",
      Cruises: "Do you mind if we go on a cruise and set sail for love?",
      Backpacking: "Do you mind if we go backpacking and rough it together?",
      Hiking: "Do you mind if we go hiking and see where the trail leads us?",
      Camping:
        "Do you mind if we go camping and rough it in the great outdoors?",
    },
    Reading: {
      Fiction:
        "Are you a fiction book? Because you’re making my imagination run wild.",
      "Non-fiction":
        "Are you a non-fiction book? Because you’re making me learn something new.",
      Mystery:
        "Are you a mystery novel? Because you’re making me solve the case of your love.",
      Thriller: "Are you a thriller? Because you’re making my heart race.",
      Romance: "Are you a romance novel? Because you’re making my heart swoon.",
      "Science fiction":
        "Are you a science fiction book? Because you’re making my mind blast off.",
      Fantasy:
        "Are you a fantasy book? Because you’re making my dreams come true.",
      Classics: "Are you a classic book? Because you’re timeless and eternal.",
      Poetry: "Are you a poetry book? Because you’re making my heart rhyme.",
      "Graphic novels":
        "Are you a graphic novel? Because you’re making my heart graphic.",
    },
    Movies: {
      Action: "Are you an action movie? Because you’re thrilling me.",
      Comedy: "Are you a comedy movie? Because you’re making me laugh.",
      Drama: "Are you a drama movie? Because you’re making my heart feel full.",
      "Sci-fi": "Are you a sci-fi movie? Because you’re making my mind soar.",
      Romance: "Are you a romance movie? Because you’re making my heart swoon.",
      Horror: "Are you a horror movie? Because you’re making my heart race.",
      Thriller:
        "Are you a thriller movie? Because you’re making my heart pound.",
      "Animated films":
        "Are you an animated movie? Because you’re making my heart cartoonish.",
      "Independent films":
        "Are you an independent movie? Because you’re making me think outside the box.",
    },
    Cooking: {
      Italian: "Are you Italian food? Because you’re making my pasta rise.",
      Mexican: "Are you Mexican food? Because you’re making my heart salsa.",
      Chinese: "Are you Chinese food? Because you’re making my heart dumpling.",
      Thai: "Are you Thai food? Because you’re making my heart curry.",
      French: "Are you French food? Because you’re making my heart croissant.",
      Indian: "Are you Indian food? Because you’re making my heart tandoori.",
      Japanese:
        "Are you Japanese food? Because you’re making my heart tempura.",
      Korean: "Are you Korean food? Because you’re making my heart bulgogi.",
      American: "Are you American food? Because you’re making my heart burger.",
      Vegetarian:
        "Are you vegetarian food? Because you’re making my heart pulse.",
    },
    Gaming: {
      "Video games":
        "Are you a video game? Because you’ve got my heart on level one.",
      "Board games": "Are you a board game? Because you’ve got me hooked.",
      "Card games":
        "Are you a card game? Because you’re making my heart shuffle.",
      "Role-playing games":
        "Are you a role-playing game? Because you’re making my heart character.",
      "Strategy games":
        "Are you a strategy game? Because you’re making my heart think.",
      "Puzzle games":
        "Are you a puzzle game? Because you’re making my heart solve.",
      "Sports games":
        "Are you a sports game? Because you’re making my heart play.",
      "Casino games":
        "Are you a casino game? Because you’re making my heart gamble.",
      "Online games":
        "Are you an online game? Because you’re making my heart connect.",
      "Mobile games":
        "Are you a mobile game? Because you’re making my heart go on the go.",
    },
    Socializing: {
      Parties: "Do you mind if we go to a party and see if we have chemistry?",
      Concert: "Do you mind if we go to a concert and rock out together?",
      Nightclubs: "Do you mind if we go to a club and dance the night away?",
      "Dinner parties":
        "Do you mind if we have a little dinner party and cook up some romance?",
      Barbecues: "Do you mind if we have a barbecue and grill up some love?",
      Picnics: "Do you mind if we have a picnic and spread out the love?",
      Potlucks:
        "Do you mind if we have a potluck and bring our hearts together?",
      "House parties":
        "Do you mind if we have a house party and make it a home?",
      Weddings: "Do you mind if we go to a wedding and tie the knot?",
      "Baby showers":
        "Do you mind if we go to a baby shower and start a family?",
      "Birthday parties":
        "Do you mind if we go to a birthday party and celebrate your love?",
      "Holiday parties":
        "Do you mind if we go to a holiday party and make it merry and bright?",
      "Game nights": "Do you mind if we have a game night and play for keeps?",
      "Movie nights":
        "Do you mind if we have a movie night and cuddle up together?",
      "Book clubs":
        "Do you mind if we have a book club and read between the lines?",
    },
    Fitness: {
      Yoga: "Are you a yoga instructor? Because you’re making my heart flexible.",
      Pilates:
        "Are you a pilates instructor? Because you’re making my heart strong.",
      Cardio:
        "Are you a cardio instructor? Because you’re making my heart race.",
      "Strength training":
        "Are you a strength training instructor? Because you’re making my heart muscular.",
      HIIT: "Are you a HIIT instructor? Because you’re making my heart burst.",
      CrossFit:
        "Are you a CrossFit instructor? Because you’re making my heart sweat.",
      Dancing:
        "Are you a dance instructor? Because you’re making my heart twirl.",
      Swimming:
        "Are you a swim instructor? Because you’re making my heart splash.",
      "Rock climbing":
        "Are you a rock climbing instructor? Because you’re making my heart climb.",
      Hiking:
        "Are you a hiking instructor? Because you’re making my heart trek.",
    },
  };

  const [width, height] = useWindowSize();

  const steps = [
    {
      content: "Who For",
      number: 1,
    },
    {
      content: "Interests",
      number: 2,
    },
    {
      content: "Results",
      number: 3,
    },
  ];
  const [subcategory, setSubcategory] = useState(null);

  const [step, setStep] = useState(0);
  const [niche, setNiche] = useState(null);
  const [recipientName, setRecipientName] = useState("");

  const [gender, setGender] = useState("male");

  return (
    <div>
      <Head>
        <link rel="manifest" href="https://coconut-bnhrvcotb-serenityux.vercel.app/manifest.json" />

        <title>Coconut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navigation}>
          <div className={styles.topNavigation}>
            <p
              onClick={() => {
                if (step !== 0) {
                  setStep(step - 1);
                }
              }}
            >
              Back
            </p>
            <p>{steps[step]["content"]}</p>
            <p>{steps[step]["number"]}/3</p>
          </div>
          <div>
            <div
              style={{
                width: "100%",
                left: "0px",
                top: "0px",
                backgroundColor: "#fff",
                height: 12,
                borderRadius: 16,
              }}
            >
              <div
                style={{
                  transition: "all 500ms",
                  width: step == 0 ? "33.333%" : 0.333 * (step + 1) * (width - 32) + 1,
                  backgroundColor: "#EC1663",
                  height: "12px",
                  borderRadius:
                    step == 2 ? "8px 8px 8px 8px" : "8px 0px 0px 8px",
                }}
              />
            </div>
          </div>
        </div>
      </main>
      {step == 0 ? (
        <div>
          <div style={{ marginLeft: "8px", marginRight: "32px" }}>
            <h1
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "28px",
                lineHeight: "34px",
                fontFamily: "Helvetica Neue",
              }}
            >
              Oh gosh, who caught your eyes this time?
            </h1>
            <input
            value={recipientName} 
            onChange={event => setRecipientName(event.target.value)}
              style={{
                backgroundColor: "#F2F2F2",
                paddingLeft: "8px",
                border: "none",
                borderRadius: "8px",
                height: "46px",
                border: "1px #CBCBCB",
                fontSize: "18px",
                width: "100%",
              }}
              type="text"
              name="nameGift"
              placeholder="Marsha Mellow"
            />
          </div>

          <div style={{ marginLeft: "8px", marginRight: "32px" }}>
            <h1
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                marginBottom: "16px",
                fontSize: "28px",
                lineHeight: "34px",
                fontFamily: "Helvetica Neue",
              }}
            >
              Their Gender?
            </h1>
            <div
              style={{
                marginTop: 16,
                marginBottom: 16,
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {gender == "male" ? (
                <div
                  style={{
                    width: "33%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFE2ED",
                    borderRadius: "8px 0px 0px 8px",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      textDecoration: "underline",
                      fontWeight: "regular",
                      fontFamily: "Helvetica Neue",
                      color: "#EC1663",
                    }}
                  >
                    Male
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    width: "33%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    borderRadius: "8px 0px 0px 8px",
                  }}
                  onClick={() => setGender("male")}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "regular",
                      fontFamily: "Helvetica Neue",
                      color: "#969696",
                    }}
                  >
                    Male
                  </p>
                </div>
              )}
              {gender == "female" ? (
                <div
                  style={{
                    width: "33%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFE2ED",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      textDecoration: "underline",
                      fontWeight: "regular",
                      fontFamily: "Helvetica Neue",
                      color: "#EC1663",
                    }}
                  >
                    Female
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    width: "33%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    borderRadius: "0px 0px 0px 0px",
                  }}
                  onClick={() => setGender("female")}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "regular",
                      fontFamily: "Helvetica Neue",
                      color: "#969696",
                    }}
                  >
                    Female
                  </p>
                </div>
              )}
              {gender == "other" ? (
                <div
                  style={{
                    width: "33%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFE2ED",
                    borderRadius: "0px 8px 8px 0px",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      textDecoration: "underline",
                      fontWeight: "regular",
                      fontFamily: "Helvetica Neue",
                      color: "#EC1663",
                    }}
                  >
                    Other
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    width: "33%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F2F2F2",
                    borderRadius: "0px 8px 8px 0px",
                  }}
                  onClick={() => setGender("other")}
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "regular",
                      fontFamily: "Helvetica Neue",
                      color: "#969696",
                    }}
                  >
                    Other
                  </p>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                setStep(step + 1);
              }}
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EC1663",
                borderRadius: "16px",
                height: "48px",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "regular",
                  fontFamily: "Helvetica Neue",
                  color: "#FFE2ED",
                  fontSize: "16px",
                  marginTop: "24px",
                  height: "48px",
                  display: "flex",
                }}
              >
                Continue
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {step == 1 ? (
        <div>
          <div style={{ marginLeft: "8px", marginRight: "32px" }}>
            <h1
              style={{
                fontStyle: "normal",
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "28px",
                lineHeight: "34px",
                fontFamily: "Helvetica Neue",
              }}
            >
              What is something you think they’re into?
              {niche != null ? (
                <text>
                  <br />& now be a bit more specific please
                </text>
              ) : null}
            </h1>
          </div>
          <div
            style={{
              display: "inline-flex",
              flex: 1,
              width: "100%",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {Object.keys(pickupContent).map((contentCategory) => {
              return niche == contentCategory ? (
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#EC1663",
                      color: "#F2F2F2",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      borderRadius: "24px",
                      flexDirection: "row",
                    }}
                  >
                    <p
                      style={{ fontSize: "16px", fontFamily: "Helvetica Neue" }}
                    >
                      {contentCategory}
                    </p>
                  </div>
                  <div style={{ width: "100vw" }}>
                    {Object.keys(pickupContent[contentCategory]).map(
                      (subcategoryMap) => {
                        return (
                          <div
                            onClick={() => {
                              setSubcategory(subcategoryMap);
                              setStep(step + 1);
                            }}
                            style={{
                              backgroundColor: "#FDE8EF",
                              marginRight: "8px",
                              marginBottom: "8px",
                              marginTop: "4px",
                              color: "#EC1663",
                              paddingLeft: "16px",
                              paddingRight: "16px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                              borderRadius: "24px",
                              display: "inline-flex",
                              flexDirection: "row",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                fontFamily: "Helvetica Neue",
                              }}
                            >
                              {subcategoryMap}
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setNiche(contentCategory)}
                  style={{
                    backgroundColor: "#F2F2F2",
                    color: "#616161",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "Helvetica Neue" }}>
                    {contentCategory}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {step == 2 ? (
        <div>
        <p style={{ fontStyle: "normal", fontFamily: "Helvetica Neue", marginLeft: 16, marginRight: 16, fontWeight: "600", fontSize: "48px" }}>
          Hey {recipientName}, {pickupContent[niche][subcategory]}
        </p>
        <p 
      style={{
        fontStyle: "normal",
fontWeight: "500",
fontSize: "18px",
marginLeft: "16px",
lineHeight: "21px",
fontFamily: "Helvetica Neue",
color: "#EC1663"
      }}
        onClick={() =>  {
         if (navigator.share) {
          navigator.share({
            title: recipientName + ' Pickup Line',
            text: "Hey " + recipientName + ", " + pickupContent[niche][subcategory]
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
      }}>Share Pickup Line</p>
        <a
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "21px",
          marginLeft: "16px",
          fontFamily: "Helvetica Neue",
          color: "#EC1663",
          textDecoration: "none"
        }}

        href={'https://coconut.up.railway.app/postcard?' + new URLSearchParams({name: recipientName, picline: pickupContent[niche][subcategory], gender: gender})}
      >Create Postcard</a>
        <p 
      style={{
        fontStyle: "normal",
fontWeight: "500",
fontSize: "18px",
lineHeight: "21px",
marginLeft: "16px",
fontFamily: "Helvetica Neue",
color: "#EC1663"
      }}
        onClick={() =>  {
         setStep(0)
      }}>Generate Another</p>
        </div>
      ) : null}
      

    </div>
  );
}
