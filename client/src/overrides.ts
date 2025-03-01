import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";


const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("brand.200", "brand.900")(props),
      lineHeight: "tall",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    // ":root":{
    //   fontSize: "3xl"
    // },
    a: {
      color: mode("teal.300", "teal.500")(props),
    },
    hr: {
      backgroundColor: mode("white", "black"),
    },
    Link: {
      fontSize: "4xl",
    },
    p: {
      fontSize: "xl",
    },
    div: {
      fontSize: "3xl",
    },
    VStack: {
      fontSize: "xl",
    },
    Text: {
      fontSize: "4xl",
    },
  }),
};

const components = {
  Tooltip: {
    baseStyle: {
      color: mode("gray.800", "whiteAlpha.900"),
      bg: mode("brand.200", "brand.900"),
      colorScheme: "brand",
    },
  },
};

const colors = {
  brand: {
    50: "#EFFBF1",
    100: "#CCE0D1",
    200: "#A6C9AE",
    300: "#4FCF62",
    400: "#30B043",
    500: "#2F8122",
    600: "#758173",
    700: "#4E564D",
    800: "#31493B",
    900: "#020402",
  },
};

const customTheme = extendTheme({ config, styles, colors, components});
export default customTheme;