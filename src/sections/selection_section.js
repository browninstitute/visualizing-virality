import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

import { NETWORK1 } from "./network_p5/network1";
import { NETWORK2 } from "./network_p5/network2";
import { ALGORITHM } from "./algorithm";
import { GITHUB } from "./github";
import { DEMOTION } from "./demotion";
import { DEMOTION_INTRO } from "./demotion_intro";
import { SELECTION_MENU } from "./selection_menu";
import { OUTRO } from "./outro";
import { NETWORK1_M } from "./network_p5/network1_newMobile";
import { NETWORK2_M } from "./network_p5/network2_newMobile";
import brady_p from "../assets/brady_profile.jpg";
import black_p from "../assets/black_profile.jpg";
import mccarthy_p from "../assets/mccarthy_profile.jpg";
import black_i from "../assets/black_tweet_pic2.jpg";
import mccarthy_v from "../assets/mccarthy_tweet_vid.mp4";
import Papa from "papaparse";

export function SELECTION_SECTION() {
  const t1 = "data/links_tb.csv";
  const t2 = "data/nodes_tb.csv";
  const t3 = "data/users_tb.csv";
  const b1 = "data/links_black.csv";
  const b2 = "data/nodes_black.csv";
  const b3 = "data/users_black.csv";
  const m1 = "data/links_mccarthy.csv";
  const m2 = "data/nodes_mccarthy.csv";
  const m3 = "data/users_mccarthy.csv";

  const [data, setData] = useState({
    table: [],
    nodes_table: [],
    info_table: [],
    loaded: null,
  });
  function isMobile() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }
  const [loading, setLoading] = useState(true);

  const loadCSV = async (url, type, maps, dataset) => {
    try {
      const response = await fetch(url);
      const csvText = await response.text();
      if (type === "nodes") {
        Papa.parse(csvText, {
          header: true,
          worker: true,
          fastMode: true,
          step: (results, parser) => stepNodes(results, parser, maps),
          complete: function (results, file) {
            console.log("Parsing complete: Nodes");
            maps.loads.push("nodes");
            // maps.nodes_table = results;
            if (maps.loads.length === 3) {
              let new_data = {
                name: dataset,
                loaded: true,
              };
              new_data.maps = maps;
              setData(new_data);
              setLoading(false);
            }
          },
        });
      }
      if (type === "links") {
        Papa.parse(csvText, {
          header: true,
          worker: true,
          fastMode: true,
          step: (results, parser) => stepLinks(results, parser, maps),
          complete: function (results, file) {
            maps.loads.push("links");
            // console.log("Parsing complete: Links");
            if (maps.loads.length === 3) {
              let new_data = {
                name: dataset,
                loaded: true,
              };
              new_data.maps = maps;
              setData(new_data);
              setLoading(false);
            }
          },
        });
      }
      if (type === "info") {
        Papa.parse(csvText, {
          header: true,
          worker: true,
          fastMode: true,
          step: (results, parser) => stepInfo(results, parser, maps),
          complete: function (results, file) {
            maps.loads.push("info");
            // console.log("Parsing complete: Info");
            if (maps.loads.length === 3) {
              let new_data = {
                name: dataset,
                loaded: true,
              };
              new_data.maps = maps;
              setData(new_data);
              setLoading(false);
            }
          },
        });
      }
    } catch (error) {
      console.error(`Error loading CSV data: ${error} ${url} ${type}`);
    }
  };

  const stepNodes = function (results, parser, maps) {
    let row = results.data;
    if (!row) return;
    let type = row.type;
    let id = row.id;
    let time = parseInt(row.time);
    if (time < 153442) {
      maps.categoryMap.set(id, type);
      maps.timeMap.set(id, time);
      maps.timeToNode.set(time, id);
      maps.nodes_table.push(row);
    }
  };

  const stepLinks = function (results, parser, maps) {
    let row = results.data;
    if (row) {
      let id = row.Target;
      let parent = row.Source;
      maps.parentMap.set(id, parent);
      maps.tableCount += 1;
      maps.table.push(row);
    }
  };

  const stepInfo = function (results, parser, maps) {
    let row = results.data;
    if (row) {
      let id = row.id;
      let followers = row.followers;
      let username = row.username;
      let last_time = row.last_time;
      let Hop = parseInt(row.Hop);
      maps.followerMap.set(id, followers);
      maps.nameMap.set(id, username);
      maps.finalTimeMap.set(id, last_time);
      maps.hopMap.set(id, Hop);
    }
  };

  const buildMaps = (d) => {
    let loads = [];
    const end_time = 153442;
    let names = [];
    let tableCount = 0;
    let timeMap = new Map();
    let timeToNode = new Map();
    let nameMap = new Map();
    let followerMap = new Map();
    let parentMap = new Map();
    let hopMap = new Map();
    let finalTimeMap = new Map();
    let categoryMap = new Map();
    let table = [];
    let nodes_table = [];

    const num_bars = 150;
    let bar_times = parseInt(end_time / num_bars);
    let hist_times = Array.from(
      { length: num_bars },
      (_, i) => bar_times + i * bar_times
    );
    let maps_all = {
      loads: loads,
      tableCount: tableCount,
      timeMap: timeMap,
      timeToNode: timeToNode,
      nameMap: nameMap,
      followerMap: followerMap,
      parentMap: parentMap,
      hopMap: hopMap,
      finalTimeMap: finalTimeMap,
      categoryMap: categoryMap,
      names: names,
      hist_times: hist_times,
      bar_times: bar_times,
      nodes_table: nodes_table,
      table: table,
    };
    return maps_all;
  };

  const loadCSVs = async (dataset) => {
    setData({
      table: [],
      nodes_table: [],
      info_table: [],
      loaded: null,
      maps: null,
    });
    let maps = buildMaps(dataset);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (dataset === "@TomBrady") {
      await loadCSV(t1, "links", maps, dataset);
      await loadCSV(t2, "nodes", maps, dataset);
      await loadCSV(t3, "info", maps, dataset);
    }
    if (dataset === "@6lack") {
      await loadCSV(b1, "links", maps, dataset);
      await loadCSV(b2, "nodes", maps, dataset);
      await loadCSV(b3, "info", maps, dataset);
    }
    if (dataset === "@SpeakerMcCarthy") {
      await loadCSV(m1, "links", maps, dataset);
      await loadCSV(m2, "nodes", maps, dataset);
      await loadCSV(m3, "info", maps, dataset);
    }
  };

  const preloadEverything = async () => {
    setLoading(true);
    await loadCSVs("@TomBrady").then(() => {
      setNewRender(false);
    });
  };

  const getkeyvals = (uname) => {
    // eslint-disable-next-line default-case
    switch (uname) {
      case "@TomBrady":
        return {
          name: "Tom Brady",
          username: "@TomBrady",
          category: "Sports",
          text: "Now that I’m retired I have time to go see @80forBrady four separate times today.",
          date: "02/03/2023",
          likes: "111.7K",
          rts: "4788",
          replies: "2923",
          image: brady_p,
          t_image: null,
          t_vid: null,
          t_link: "https://twitter.com/TomBrady/status/1621502628222980097",
        };
      case "@6lack":
        return {
          name: "6lack",
          username: "@6lack",
          category: "Entertainment",
          text: "my third album, Since I Have A Lover 💐— OUT NOW https://6lack.lnk.to/SIHALalbum",
          date: "03/24/2023",
          likes: "34.5K",
          rts: "9840",
          replies: "363",
          image: black_p,
          t_image: black_i,
          t_vid: null,
          t_link: "https://twitter.com/6LACK/status/1639114939087618050",
        };
      case "@SpeakerMcCarthy":
        return {
          name: "Kevin McCarthy",
          username: "@SpeakerMcCarthy",
          category: "News",
          text: "It doesn't matter if it's President Trump or a Democrat. Our justice system should not be used to target political opponents. Period.",
          date: "03/20/2023",
          likes: "80.9K",
          rts: "18.4k",
          replies: "19.9k",
          image: mccarthy_p,
          t_image: null,
          t_vid: mccarthy_v,
          t_link:
            "https://twitter.com/speakermccarthy/status/1637850612992753664",
        };
      case "default":
        return {
          name: "Tom Brady",
          username: "@TomBrady",
          category: "Sports",
          text: "Now that I’m retired I have time to go see @80forBrady four separate times today.",
          date: "02/03/2023",
          likes: "111.7K",
          rts: "4788",
          replies: "2923",
          image: brady_p,
          t_image: null,
          t_vid: null,
          t_link: "https://twitter.com/TomBrady/status/1621502628222980097",
          unselected: true,
        };
    }
  };

  const [newRender, setNewRender] = useState(true);
  const [selection, setSelection] = useState(getkeyvals("default"));
  const updateSelection = async (t_uname) => {
    setLoading(true);
    console.log("changing to: " + t_uname);
    let new_selection = Object.create(null);

    let n_keyvals = getkeyvals(t_uname);
    new_selection["name"] = n_keyvals.name;
    new_selection["username"] = n_keyvals.username;
    new_selection["category"] = n_keyvals.category;
    new_selection["text"] = n_keyvals.text;
    new_selection["date"] = n_keyvals.date;
    new_selection["likes"] = n_keyvals.likes;
    new_selection["rts"] = n_keyvals.rts;
    new_selection["replies"] = n_keyvals.replies;
    new_selection["image"] = n_keyvals.image;
    new_selection["t_image"] = n_keyvals.t_image;
    new_selection["t_vid"] = n_keyvals.t_vid;
    new_selection["t_link"] = n_keyvals.t_link;
    setSelection(new_selection);
    await loadCSVs(n_keyvals.username).then(() => {
      setNewRender(false);
      setPauseN1(false);
      setPauseN2(false);
    });
  };

  const [demotion, setDemotion] = useState(3);
  const updateDemotion = (t_demotion) => {
    console.log("changing demotion to: " + t_demotion);
    setDemotion(t_demotion);
  };

  const [pauseN1, setPauseN1] = useState(false);
  const updatePauseN1 = (pause) => {
    setPauseN1(pause);
  };
  const [pauseN2, setPauseN2] = useState(false);
  const updatePauseN2 = (pause) => {
    setPauseN2(pause);
  };

  const [resetN1, setResetN1] = useState(false);
  const updateResetN1 = (reset) => {
    setResetN1(reset);
  };
  const [resetN2, setResetN2] = useState(false);
  const updateResetN2 = (reset) => {
    setResetN2(reset);
  };

  const scrollRef = useRef(null);
  const executeScroll = () => {
    console.log(scrollRef);
    scrollRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (newRender) {
      preloadEverything();
    }
  }, []);

  const [ref, inView] = useInView({ amount: 0 });
  const [isVisibleN1, setIsVisibleN1] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsVisibleN1(true);
    }
    if (!inView) {
      setIsVisibleN1(false);
    }
  }, [inView]);

  const [refVN2, inViewN2] = useInView({ amount: 0 });
  const [isVisibleN2, setIsVisibleN2] = useState(false);
  useEffect(() => {
    if (inViewN2) {
      setIsVisibleN2(true);
    }
    if (!inViewN2) {
      setIsVisibleN2(false);
    }
  }, [inViewN2]);

  return (
    <>
      <SELECTION_MENU
        UserSelection={selection}
        SetterUserSelection={updateSelection}
        ScrollToSelection={executeScroll}
      />
      <div className="scroll_to_algorithm" ref={scrollRef}>
        <ALGORITHM UserSelection={selection} />
      </div>

      <div className="network_visible_container" ref={ref}>
        {loading && <div className="showloading">Loading</div>}
        {!loading && !isMobile() && (
          <NETWORK1
            UserSelection={selection}
            NetworkPause={pauseN1}
            SetterNetworkPause={updatePauseN1}
            NetworkReset={resetN1}
            SetterNetworkReset={updateResetN1}
            nodes_table={data.nodes_table}
            info_table={data.info_table}
            maps={data.maps}
            loading_currently={loading}
            isinView={isVisibleN1}
          />
        )}
        {!loading && isMobile() && (
          <NETWORK1_M
            UserSelection={selection}
            NetworkPause={pauseN1}
            SetterNetworkPause={updatePauseN1}
            NetworkReset={resetN1}
            SetterNetworkReset={updateResetN1}
            table={data.table}
            nodes_table={data.nodes_table}
            info_table={data.info_table}
            maps={data.maps}
            loading_currently={loading}
            isinView={isVisibleN1}
          />
        )}
      </div>

      <GITHUB UserSelection={selection} />
      <DEMOTION_INTRO UserSelection={selection} />
      <DEMOTION
        UserSelection={selection}
        UserDemotion={demotion}
        SetterUserDemotion={setDemotion}
      />

      <div className="network_visible_container" ref={refVN2}>
        {loading && <div className="showloading">Loading</div>}
        {!loading && !isMobile() && (
          <NETWORK2
            UserSelection={selection}
            UserDemotion={demotion}
            NetworkPause={pauseN2}
            SetterNetworkPause={updatePauseN2}
            NetworkReset={resetN2}
            SetterNetworkReset={updateResetN2}
            maps={data.maps}
            isinView={isVisibleN2}
          />
        )}
        {/* 
        {!loading && isMobile() && (
          <NETWORK2_M
            table={data.maps.table}
            nodes_table={data.maps.odes_table}
            info_table={data.info_table}
            UserSelection={selection}
            UserDemotion={demotion}
            NetworkPause={pauseN2}
            SetterNetworkPause={updatePauseN2}
            NetworkReset={resetN2}
            SetterNetworkReset={updateResetN2}
            maps={data.maps}
            loading_currently={loading}
            isinView={isVisibleN2}
          />
        )} */}
      </div>

      <OUTRO
        UserSelection={selection}
        SetterUserSelection={updateSelection}
        ScrollToSelection={executeScroll}
      />
    </>
  );
}
