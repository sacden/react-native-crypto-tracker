import React, { Suspense } from "react";
import { Text, View } from "react-native";
import PortfolioAssetsList from "../PortolioScreen/components/PortfolioAssetsList";

const PortfolioScreen = () => {
  return (
    <View style={{ fles: 1 }}>
      <Suspense fallback={<Text style={{ color: "white" }}>Loading Please Wait!</Text>}>
        <PortfolioAssetsList />
      </Suspense>
    </View>
  );
};

export default PortfolioScreen;
