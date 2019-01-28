import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { Button } from "@smooth-ui/core-sc";
import { Play } from "react-feather";
import { Summary } from "../../../server/api/workspace/summary";

const Container = styled.div`
  ${space};
`;

const Row = styled.div`
  display: flex;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Label = styled.div`
  font-size: 11px;
`;

const Value = styled.div``;

interface Props {
  summary: Summary;
}

export default function SummaryPanel({ summary }: Props) {
  return (
    <Container p={2}>
      <Row>
        <Cell>
          <Value>0</Value>
          <Label>Passing suits</Label>
        </Cell>
        <Cell>
          <Value>0</Value>
          <Label>Failing suits</Label>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Value>{summary.numPassedTests}</Value>
          <Label>Passing tests</Label>
        </Cell>
        <Cell>
          <Value>{summary.numFailedTests}</Value>
          <Label>Failing tests</Label>
        </Cell>
      </Row>
    </Container>
  );
}
