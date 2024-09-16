import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

interface DataItem {
  id: number;
  companyName: string;
  ideas: number;
}

interface SearchBardProps {
  data: DataItem[];
}

const SearchBar = ({ data }: SearchBardProps) => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option) => option.companyName)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Companies"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default SearchBar;
