install.packages("here")
install.packages(dplyr)
library(dplyr)
library(here)
library(tidyverse) # install.packages("tidyverse")
library(patchwork) # install.packages("patchwork")



here::here("demo_data", "kidiq.RDS")


d <- read.table("test.txt", header = TRUE)
d <- read.table(here::here("data", "txt_file.txt"), header = TRUE)


library(readr)
d <- read_csv(file = "./data/csv_file.csv") 
d <- read_csv(here::here("data", "csv_file.csv")) 


url <- "https://raw.githubusercontent.com/perlatex/R_for_Data_Science/master/demo_data/wages.csv"
d <- read_csv(url)


library(readxl)
d <- read_excel("olympics.xlsx") 
d <- read_excel(here::here("olymics.xlsx"))


df <- readr::read_csv(here::here("demo_data", "score.csv"))
df
## # A tibble: 6 × 3
##   name  type    score
##   <chr> <chr>   <dbl>
## 1 Alice english    80
## 2 Alice math       60
## 3 Bob   english    70
## 4 Bob   math       69
## 5 Carol english    80
## 6 Carol math       90


library(tidyverse)
d <- read_csv(here::here("demo_data", "temp_carbon.csv"))
d %>% head(5)
## # A tibble: 5 × 5
##    year temp_anomaly land_anomaly ocean_anomaly carbon_emissions
##   <dbl>        <dbl>        <dbl>         <dbl>            <dbl>
## 1  1880        -0.11        -0.48         -0.01              236
## 2  1881        -0.08        -0.4           0.01              243
## 3  1882        -0.1         -0.48          0                 256
## 4  1883        -0.18        -0.66         -0.04              272
## 5  1884        -0.26        -0.69         -0.14              275

library(tidyverse)
penguins <- read_csv(here::here("demo_data", "penguins.csv")) %>%
  janitor::clean_names() %>% 
  drop_na()

penguins %>%
  head()

## # A tibble: 6 × 8
##   species island    bill_length_mm bill_depth_mm flipper_length_mm body_mass_g
##   <chr>   <chr>              <dbl>         <dbl>             <dbl>       <dbl>
## 1 Adelie  Torgersen           39.1          18.7               181        3750
## 2 Adelie  Torgersen           39.5          17.4               186        3800
## 3 Adelie  Torgersen           40.3          18                 195        3250
## 4 Adelie  Torgersen           36.7          19.3               193        3450
## 5 Adelie  Torgersen           39.3          20.6               190        3650
## 6 Adelie  Torgersen           38.9          17.8               181        3625
## # ℹ 2 more variables: sex <chr>, year <dbl>