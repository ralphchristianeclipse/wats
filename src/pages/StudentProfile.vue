<template>
  <q-page padding>
     <div class="row gutter-md">
      <div class="col-sm-3 col-xs-12">
        <div class="col-xs-12">
          <q-list class="custom-list" multiline highlight separator>
            <q-list-header class="custom-header info glossy">Profile
            </q-list-header>
            <q-item :key="index">
              <q-item-main>
                <q-item-tile label> 
                  <div class="text-center spacer">
                    <img class="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABEVBMVEX////9yI5Pbn/2tHudbkiNXz0zVGrioHFiPzOYaUT4uYDZpnT/y5BBan8xUmn2sHL+uHtaNy5Janz86dviq3znrof4wpZVMitBZHeHWTj9xon/zpLqqnTjsX/ToXGHVS6XZDkmTGT1vIWFUim2imTEl205Wm5AZHfvsXurkn2KmJ/M0NEYRF6aaUBod3759PDQo3zj1MmViX19f3717un9z533vIu7i1/Hn3xkeIdsSDn72LyieVn90qT738iifGKZpat5iZXUv6+5l33u5+G5noyWYDCDTR62vcLn6ev2xZ7qpGzIyMXwzreQnaP24dNxe36Nhn5pgY3czsWriXPGsaKwgFaZb1H93r+HYUnOkFop7KReAAAMSklEQVR4nO2dCVvbOBCGca42YCAYFnIADQGScBoKW0pLgXKXtntwpMf//yEr+ZRtyZYSjexk+Z6nV2hsvflGM9LYScbG1OrqxFR8RsW6WC3vPKY9CEBdnawWy4Xm2mHaAwHS1cZqsVgsFAo7zetRZNx/uq0VbULEeHN5lfaA5Orwubhq8aEgtbXTPLkYmZxz+Hx2+6boqOALGTkKkFfPP1Y9PN9C18ibtYuhDtfH6yKJF7TQc/LkeT/tgfalq+eT2zdBvLCFhJVPF8OVXc2Lp7B5LAtdyJ1m4fpxOGal+Xj94/ZNjYLHspCclZkP2KvnszdU8xIsJCh3LjMbsObjBj00BQAdK0+us2fl4cXZKiM0OWM0YmWWZiWqebex5okCOlY+ZWNBcBgs6YPGaAhyLXUncXDy4PUDaKnZvExxTl5dcwTnYICWk83ndLLr/tlqQmohJDgJI5ApbLb2fwjwDQiIGW/W1DIenq3y40kAxGo+KUw6zyL+FQeZhKR2mheK+EwxA2UBIjUvlQAeFsUMlAeIbCwoiNQr7gLhSMok9BnBC4eZLiAStIuCfFJj1FL5BBbwSdRC2YAoTq8hAR8Fs6j8GEW6gVyoZgEQCQ7wOf0YxQKs/IJ8UBYWwJKN8CwEAizcQK3CN9JbzAS18wxEKDgLoWIUqQcDeJjWgjuqJgzhlRghoIWFJsxEfBSLUkDAQhOm6IsRQlqYDUJIwBfCfiWUaUCDFCrTCBGCAv4fCGF6GaYAIWyQQlV8kVUbLGBhZ+QJgdalY2dZIdyB6gxfJ+yeap6KZUGFGRLu2oBqRl3HhGmtVu6tL7uaENRykKh8dFSIUhOEUG0M5qKmVuu9yo839L7VaAVdO2ro2kSPCQm0pBkb22eUi1pvMZ/Pj2sDSNd6JE65pWsI+4iBCFTwWQWxVsZ8AxIiRhKnfKTjxxpL9AnZBOvs06K01qvkZRBqDXIylh1snW4jFODYDwrg0XheDqGmL/k05WWdwu1qDYzwKVIuar8dByUQanqLoHEIaYiAVy4iPW/fQRmEJGJ5yUOMBCpYsRgbuwgTFvJ5mYQI0SNc170He+FEA3dpJrx/qnUlExKIhYb/WMhEoL0TlnkbitG8bEIfsdzyHgvH6Q0YYOTqWl4+oYfoZVOsICHUzgIrkEyDFsoidIPSKfqWgiaCXgQOrL1riyCEXl3UI4+Ap9LQ2ruchyHUdKsElslHFKXSYDKt9aAI7aj0KyJetJKEkPebkGvv2m8wQqsEkqlGDyxsAAEDK9PQNJRKqGnBVKNPEIRwq1IsIpmCEuLc0qOnGtj7aciVKayHjfWyv6rRNGJZA3wP5qMqQpQ+ywxC2JuFiWQKTdgqEv8iCCHXbFi3qghRyaATwqZSsisMTRiQTwjWDXbld4XTIoS+2dvfBKdECLpmw/JSTU0xoYsIumbDsu+CrtUKvV5XJeHRkdsCBwa01m214lG3kg8LlFDDnf9lxAieaPAWMbypUEJoUWpHZbCb9nxdrP4eTyLUdZ09TjZA8rMay+CJBqWa31Q+glDX1teWxRH15bV1Lelpjd/wbyn5ezqBUF+aWZhZ+CBM+AE9a2YpCbE+C07I4CM8nHmNNPOrETfQiBq/7Kcl/09owI8sC11CfX0BD/X1Qit+oCG1nGetJ5p4CkzItNAjXJuxx5oYcKT0JZtwZi3xWX/CAh4yLVRGWIfNNcw8o5AQNtewp6E6QtiJOPqEp8mEE/ZYXwvwYdlPWphIO0pnEwk1/dcCV9oPyi4yC7+Sn1UHfhdpMqGmn7xe+LAuVvBx+/DDwusTjpelDgs4dp9MqDXwKloQ0H4Kx8tS/wlMyC6I8LsnmxB86X2ftPIGBoS2EIm+O1REWAdes1kyUySsg+8sbMR31EBVQFj/pAQQ6TQ/HYWEJqzXNeiNE6nZj+8UE376Cb+7D+udQkIVCeaF8IVwGAnnFRIqKxP/M8J7dYTqSn1A4Y4GfXCtVkyrXsc/5iFUWet9hTsaNILWK6Qug1HXuvjHLY59vfpqj2WGCOvRkVmADEbd+2myjfCbQrpC+6joRNQXX7labPmXz6w/W8TP0u5zM5U4EfVXQXW73VarhX4PPZ76tQqWwmEaiTbCwzglephWkEYqYtTEVjIexzxMqVZghdtSURN5EBNzaXoWRnuLkcHpWlKgLiZe2VbRfGIqPBMpNVFvxTEu8hTDFAGjV9toSzensFPEWgoEAdOp9p7C7VP66hRV927QysVu3GqOBEwzRi3NcyE6ff6WLY2/7Z9iHhVG7EtZAOQN1P4AUw9RW+FNhizEetpJxpcZilQ5iPVPaX+mPqnZUKd/cLz6n5kx0NHsfaDTPyjfpyx+UYn5MT8tA1HxBQoxzc77Rord10bal7XwDMr86DH2g1iv/8xSemHo1M06oik1g9mFJTfrCCFmNLuwhLKOaL7JbnZh6Q8LkdJipEhvzac93D70B9oicUUqbpx+HVJCizEB0dofL+aHlhBvdWMiVbcbw+h1GGJCDDBO3e/ijf8rx+ghJ8QdGaKp77b13e6N9R64oSd0ezO2Aj0b+01+o0FI7yfmR5zQXaePLGF+xAmJ99mOJiHZ9hhFwuAbpUePMPRG8Py7tIfbh7gD1FbawxXX3zF83Sjg9LDs7n0xgzQcn8M6Eb8z8Bh8yMQh2+N//0rDo0TnMCFunZ9vOX81778u8npHIN6b0UNlRlubnaphdP5CfzVPw1cUuTU9f4ohNzuGUe1sZghya9PoGDmszrfTecobFQQYEeS3jnUsdMxsQG5tVqs2HtbuIHgO5K53NKNaTRvSd8/R5Pvoh56IqfJ+kjxgqk4G3XNNHJhwN3zIlJxE7kXxsIl7Ui30IBU7SXVPjolRC9U7aZ6z8XKDzkS6hb6T5wquvd3F4WEdD0R4HH9wo3oHzGc+dOKHgEzc6B+xshFjoa3OA6iNZi7BQAsxdvkZq24iILIxB4nIA5gz/u3XxMq/XMfPwQEeVzkG0H/FqOxxWIhUfYACvNsucY0gd9ynh3xHz5W2odLNSmmKD3HybT9xWnnLZyEaxQoM4N1KqVRq8yHuiSPyxmgbjQLIRGOqxI2Y68NDvgNjwNIUSLL5sl2yDs6VbSaF82nlgCeP5qrWy1za/gJAaAUpP+KlGCJHrScAS9sQS9S/HMJSievFnpwTQeSchIY7hJVzAMJNj5APMSeytOlyHdIDLK1sAhAaU97xuWqGsStAuMtF6A9gygAgLJHiGc/kAW+cVg64YrRNjkA+oLlCHp+rZvAWfs5SHwBckb/8doqFGyV8iFwbKc402p4iBwBQLrYChBJrRuVSqE64hPLLxV0gSvFc50JM7GlwAhpBwNKK/HXbeYhQEmKfgBAF8XOYkC+hJiByAuYi5175LJ3wOPwqcm+lYuYiZ5LBG6bwyY+lE0ZexRL3VoqZUXkB27STSyfcpp2FE5FRF3m3vFTAbdmAX6iEfDWDsZfiXMmE64RLKLsgblEJuRH/ifJ1dwcBlF8Qw+XQQ+TbZxi50GaqMsfVmaTUCUfSC2KkHHriG2jOCLRuYq9PBJ7GOq30gkgph674hhpIqbw5hlIIPULZO0RWsJS4e1NoN+Xy5f/hBWwzzyp9h9hmE3JmG28yVvY4pyAzy1hnbcsFNNlBWuKOUztSecs8VtxJJe8Q6eXQFa+JOFLnOKsgVjXupJILIqMcCpuYMyZ5IzQXb6Hsgsgqh7Y4i6KoYrJbSXpBZJdDS/xhKqLYIJVdEGPKIRZvwRBTO55Q7g4xujskxdeXkkwod4dortiELE61hM5YJJYL87iDpr1Rrbbbbef4YVQVhO6J0SiqVQMlt86xLMbzQCLxUK1TTgES+mD4lwfmq3ouifAzvRi4qFNTnB0bYUJ8ZAqYPwJZyeYhYSQIVT4eEgvMl6ybMkCGL0eSCGFWLDIkaweF7yxPm4Ui5855Kbo7//yQq3YmJyczgGoYaBydau7h8/k3WYCO9vfeb7w92MUnSAHVcM67e/B24/0ezLcgzk5XLHXn9i4xas5HTbgrdHCwHAa73Jvr2kMAeh8Y8U1I1mnyPioQng/mnNEVPGEQtdLlvGFLkG/PcSx6WoWEjuZACOeY53shfCF8IXwhHFrCmO8gVU4I9LlnGSKEAYz5ik7FhNMfgQgjn96dmodAgDG5Ri0h5OcvHI7TGVUSTr+D/XjF03va9x+qIxy/F/1ggv8AOMAtjIFpHDMAAAAASUVORK5CYII=" alt="">
                  </div>
                </q-item-tile>
                <q-item-tile label class="desc spacer"> Name: <span class="pull-right">Tyler John Dabid </span>  </q-item-tile>
                <q-item-tile label class="desc"> Section:<span class="pull-right">4-J </span> </q-item-tile>
                <q-item-tile label class="desc"> Age:<span class="pull-right">10</span>  </q-item-tile>
                <q-item-tile label class="desc"> Birthday: <span class="pull-right">March 5, 2008 </span>  </q-item-tile>
              </q-item-main >
            </q-item>
          </q-list>
        </div>
        <div class="col-xs-12">
          <q-list class="custom-list" multiline highlight separator>
            <q-list-header class="custom-header success glossy">Contact
            </q-list-header>
            <q-item :key="index">
              <q-item-main>
                <q-item-tile label class="desc spacer"> <q-icon name="phone" color="black"/> Contact No. <span class="pull-right">6789889 </span>  </q-item-tile>
                <q-item-tile label class="desc"><q-icon name="contact_phone"  color="black"/> Preffered Contact:<span class="pull-right">Father </span> </q-item-tile>
                <q-item-tile label class="desc"> <q-icon name="home"  color="black"/> Address:<span class="pull-right">Antipolo</span>  </q-item-tile>
              </q-item-main >
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-sm-9 col-xs-12">
         <q-tabs class="custom-tab" color="secondary" glossy>
          <q-tab default slot="title" name="info" label="Info"  />
          <q-tab slot="title" name="achievements" label="Achievements"  />
          <q-tab slot="title" name="extracurricular" label="Extracurricular"  />
          <q-tab slot="title" name="health" label="Health &amp; Medical"  />
          <q-tab slot="title" name="schedule" label="Class Schedule"  />
          <q-tab slot="title" name="e-status" label="Enrollment Status"  />
          <q-tab-pane name="info">
           <q-list class="custom-list" multiline highlight separator>
            <q-list-header  class="custom-header info glossy">
             <q-icon name="fas fa-female" size="1.5rem"/> Mother
            </q-list-header>
              <q-item >
                <q-item-main>
                  <q-item-tile label class="desc">Name:  <span class="pull-right">Francine David </span>   </q-item-tile>
                  <q-item-tile label class="desc">Cellphone No.  </q-item-tile>
                  <q-item-tile label class="desc">Office No. </q-item-tile>
                  <q-item-tile label class="desc">Office Address. </q-item-tile>
                  <q-item-tile label class="desc">Email:  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>

            <q-list class="custom-list" multiline highlight separator>
            <q-list-header  class="custom-header info glossy">
             <q-icon name="fas fa-male" size="1.5rem"/> Father
            </q-list-header>
              <q-item >
                <q-item-main>
                  <q-item-tile label class="desc">Name:  <span class="pull-right">Ricky David </span>  </q-item-tile>
                  <q-item-tile label class="desc">Cellphone No.  </q-item-tile>
                  <q-item-tile label class="desc">Office No. </q-item-tile>
                  <q-item-tile label class="desc">Office Address. </q-item-tile>
                  <q-item-tile label class="desc">Email:  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>

            <q-list class="custom-list" multiline highlight separator>
            <q-list-header  class="custom-header info glossy">
             <q-icon name="fas fa-users" size="1.5rem"/> Guardian
            </q-list-header>
              <q-item >
                <q-item-main>
                  <q-item-tile label class="desc">Name:  <span class="pull-right">Angel Santos </span>  </q-item-tile>
                  <q-item-tile label class="desc">Cellphone No.  </q-item-tile>
                  <q-item-tile label class="desc">Office No. </q-item-tile>
                  <q-item-tile label class="desc">Office Address. </q-item-tile>
                  <q-item-tile label class="desc">Email:  </q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
          </q-tab-pane>
          <q-tab-pane name="achievements">
            achievements
          </q-tab-pane>
           <q-tab-pane name="extracurricular">
            extra
          </q-tab-pane>
           <q-tab-pane name="health">
            health
          </q-tab-pane>
           <q-tab-pane name="schedule">
            schedule
          </q-tab-pane>
           <q-tab-pane name="e-status">
            statu
          </q-tab-pane>

         </q-tabs>
      </div>
      
     </div>
  </q-page>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
.text-center {
  text-align: center;
  margin: 0 auto;
}

.spacer {
  margin-top: 15px;
}

.desc, .desc:hover {
  font-size: 14px !important;
  border-bottom: 1px solid #e0e0e0;
  color: #000000;
  padding: 10px;
}

.avatar {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 2px solid #63bbb2;
  margin: 0 auto;
}
</style>

