import DashboardLayout from "../components/DashboardLayout";
const netwulfUrl =
  "http://localhost:9853/?data=tmp_1964e30cb00.json&config=config_tmp_1964e30cb00.json";

const NetwulfEmbed = () => {
  return (
    <DashboardLayout>
      <iframe
        src={netwulfUrl}
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="Netwulf Graph"
      />
    </DashboardLayout>
  );
};

export default NetwulfEmbed;
