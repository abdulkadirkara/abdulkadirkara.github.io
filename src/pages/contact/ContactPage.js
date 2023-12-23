import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import BoxComp from "../../components/Box";
import SyntaxHighlighterComp from "../../components/syntaxHighlighter/SyntaxHighlighter";
import TextFieldComp from "../../components/TextField";
import { SendButton } from "../../components/customizedComp/CustomButtons";
import DividerComp from "../../components/Divider";
import PageTitleTextComp from "../common/PageTitle";
import PageTitleBottomSpaceComp from "../common/PageTitleBottomSpace";

const ContactPage = () => {
  const [formDataView, setFormDataView] = useState([
    "const button = document.querySelector('#sendBtn');",
    " ",
    "const newMessage = {",
    '  name: "",',
    '  surname: "",',
    '  email: "",',
    '  title: "",',
    '  message: "",',
    "}",
    " ",
    "button.addEventListener('click', () => {",
    " form.send(newMessage);",
    "}); ",
  ]);

  return (
    <BoxComp
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
        justifyContent: "space-around",
        gap: "50px",
      }}
    >
      <BoxComp
        sx={{
          width: { md: "100%", lg: "50%" },
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      >
        <NewMessageForm setFormDataView={setFormDataView} />
      </BoxComp>

      <DividerComp
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      <BoxComp
        id="syntaxHighlighterWrapper"
        sx={{
          width: { md: "100%", lg: "50%" },
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      >
        <NewMessageFormOnChangeView formDataView={formDataView} />
      </BoxComp>

      {/* //---------------------- */}

      <BoxComp
        id="syntaxHighlighterWrapper"
        sx={{
          width: { md: "100%", lg: "50%" },
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
        }}
      >
        <NewMessageFormOnChangeView formDataView={formDataView} />
      </BoxComp>

      <DividerComp
        sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}
        orientation="horizontal"
        variant="middle"
        flexItem
      />

      <BoxComp
        sx={{
          width: { md: "100%", lg: "50%" },
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
        }}
      >
        <NewMessageForm setFormDataView={setFormDataView} />
      </BoxComp>
    </BoxComp>
  );
};

export default ContactPage;

const NewMessageForm = ({ setFormDataView }) => {
  const FORM_VALUES = {
    name: "",
    surname: "",
    email: "",
    title: "",
    message: "",
  };

  const FORM_SCHEMA = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().required(),
    title: yup.string().required(),
    message: yup.string().required(),
  });

  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(FORM_SCHEMA),
    defaultValues: {
      ...FORM_VALUES,
    },
  });

  const inputOnChange = (event, onChange) => {
    let formOldValues = formMethods.getValues();

    let currentName = event?.target?.name;
    let currentValue = event?.target?.value;

    const updatedEmailCodeView = [
      "const button = document.querySelector('#sendBtn');",
      " ",
      "const newMessage = {",
      `  name: "${
        currentName === "name" ? currentValue : formOldValues.name
      }",`,
      `  surname: "${
        currentName === "surname" ? currentValue : formOldValues.surname
      }",`,
      `  email: "${
        currentName === "email" ? currentValue : formOldValues.email
      }",`,
      `  title: "${
        currentName === "title" ? currentValue : formOldValues.title
      }",`,
      `  message: "${
        currentName === "message" ? currentValue : formOldValues.message
      }",`,
      "}",
      " ",
      "button.addEventListener('click', () => {",
      " form.send(newMessage);",
      "}); ",
    ];

    setFormDataView(updatedEmailCodeView);
    onChange(currentValue);
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <PageTitleTextComp>contactPage.newMessageSectionTitle</PageTitleTextComp>
      <PageTitleBottomSpaceComp />
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={formMethods.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextFieldComp
              onBlur={onBlur}
              value={value}
              name={name}
              onChange={(event) => inputOnChange(event, onChange)}
              label="contactPage.name"
            />
          )}
        />

        <Controller
          name="surname"
          control={formMethods.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextFieldComp
              onBlur={onBlur}
              value={value}
              name={name}
              onChange={(event) => inputOnChange(event, onChange)}
              label="contactPage.surname"
            />
          )}
        />

        <Controller
          name="email"
          control={formMethods.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextFieldComp
              onBlur={onBlur}
              value={value}
              name={name}
              onChange={(event) => inputOnChange(event, onChange)}
              label="contactPage.email"
            />
          )}
        />

        <Controller
          name="title"
          control={formMethods.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextFieldComp
              onBlur={onBlur}
              value={value}
              name={name}
              onChange={(event) => inputOnChange(event, onChange)}
              label="contactPage.title"
            />
          )}
        />

        <Controller
          name="message"
          control={formMethods.control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextFieldComp
              onBlur={onBlur}
              value={value}
              name={name}
              onChange={(event) => inputOnChange(event, onChange)}
              label="contactPage.message"
              multiline
              rows={4}
            />
          )}
        />

        <BoxComp sx={{ textAlign: "end" }}>
          <SendButton id="sendButton" type="submit" />
        </BoxComp>
      </form>
    </>
  );
};

const NewMessageFormOnChangeView = ({ formDataView }) => {
  return (
    <>
      <PageTitleTextComp>
        contactPage.newMessageViewSectionTitle
      </PageTitleTextComp>
      <PageTitleBottomSpaceComp />
      <SyntaxHighlighterComp data={formDataView} />
    </>
  );
};
