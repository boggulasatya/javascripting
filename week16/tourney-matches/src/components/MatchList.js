import React from "react"; 
import Match from "./Match";


function MatchList(props) {
  const matches = props.matchData.map((match) => {
    return (
      <Match
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  });
  
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
}

export default MatchList;