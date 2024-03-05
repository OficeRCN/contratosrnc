// REACT
import React from "react";
import { useState } from "react";

// FORMIK
import { Formik, Field, Form, ErrorMessage } from "formik";

// YUP
import * as Yup from "yup";

// STEPS
import FormNavigation from "./FormNavigation";

// MATERIAL UI
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

//  THEME
import { useTheme } from "@mui/material/styles";

export default function MultiStepForm({ children, initialValues, onSubmit }) {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const theme = useTheme();

  const [snapshot, setSnapshot] = useState(initialValues);

  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };
  const prev = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };
  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              width: "40%",
            }}
          >
            <Stack
              direction="column"
              spacing={6}
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Stepper
                activeStep={stepNumber}
                style={{
                  scrollbarColor: `${theme.palette.primary.main} transparent`,
                  width: "100%",
                  overflowX: "scroll",
                }}
              >
                {steps.map((currentStep) => {
                  const label = currentStep.props.stepName;
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {step}
              <FormNavigation
                isLastStep={isLastStep}
                hasPrevious={stepNumber > 0}
                onBackClick={() => prev(formik.values)}
              />
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
}

export const FormStep = ({ stepName = "", children }) => children;
