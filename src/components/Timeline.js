import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const TimelineComp = (props) => {
  const { data, contentElement: Content, ...other } = props;
  return (
    <Timeline
      id="Timeline"
      sx={{
        paddingLeft: 0,
        "& .MuiTimelineItem-root:before": {
          flex: 0,
        },
      }}
      {...other}
    >
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: "#32404E" }} />
            <TimelineConnector style={{ backgroundColor: "#32404E" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Content data={item} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComp;
