/**
 * GET /v2/tags/trending/2014/12/05?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=B5B7e4Tjw8KPeY542GKhcA6BuDo=
 *
 * host: api.flickr.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie:
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "POST, GET, OPTIONS, DELETE, PUT, PATCH");
  res.setHeader("access-control-expose-headers", "X-Total-Count, Link");
  res.setHeader("x-application-context", "application:prod-bf1");
  res.setHeader("set-cookie", ["BX=8co20o9ba2vcm&b=3&s=9o;Path=/;Domain=.flickr.com;Expires=Sun, 21-Jan-2018 00:53:42 GMT"]);
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 GMT");
  res.setHeader("x-total-count", "170");
  res.setHeader("link", "<http://api.flickr.com/media-catalog/v2/tags/trending/2014/12/05?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=B5B7e4Tjw8KPeY542GKhcA6BuDo%3D&pageNumber=0>; rel=\"first\", <http://api.flickr.com/media-catalog/v2/tags/trending/2014/12/05?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=B5B7e4Tjw8KPeY542GKhcA6BuDo%3D&pageNumber=16>; rel=\"last\", <http://api.flickr.com/media-catalog/v2/tags/trending/2014/12/05?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=B5B7e4Tjw8KPeY542GKhcA6BuDo%3D&pageNumber=1>; rel=\"next\"");
  res.setHeader("content-type", "application/json; charset=UTF-8");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("date", "Fri, 22 Jan 2016 00:53:42 GMT");
  res.setHeader("age", "0");
  res.setHeader("server", "ATS");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 r12.ycpi.sjb.yahoo.net (ApacheTrafficServer [cMsSfW])");
  res.setHeader("y-trace", "BAEAQAAAAAAbCwOfMH3llQAAAAAAAAAA7MI9MyrPriIAAAAAAAAAAAAFKeGmjap5AAUp4aaQBKZpPAttAAAAAA--");

  res.write(new Buffer("H4sIAAAAAAAAAA==", "base64"));
  res.write(new Buffer("rVvbkuM2kv0VtCbCbcdIIgHea3zZvk5XrLe7w9U7E7MuRwVEgiJLJCETZKll70Tsb8zjPO7bfMPMn+yXbCaoC1USxZKltt2WIBIHSIB58iCTP/46qPj0Pc/F4GqQy4dUDIaDkhezwVUwHMwTWcnvU1UNrn78dZBGg6tfm7Zr+Digvml7FvU8H+6Ri0KUutk3mW2b3uCvw0GVVhl2/LaUOeG5LKakSgSJBI/glkiosEznVSqL5pqiInM+FUQWZJLJ6TjO0nBWjgtR3RZUVdieFpUohapS6EqPRBEY/1REZJFWCfni51pWf0h4lsmFEEXz9fjNM1E0937Ilvm8VuTNyDHN2+L3hI5d0yQxfxDqtrhddUZG5EUR4TQKomAuVV0WgM6hDcyGEFLPMUzqMkzG5JpUZQoXQHMscVhDMqkrklZkwQFeSpLxSoxXnX/5J1FW6VQCCg0c/yvE/ZSkqhkugQ+yAPvE5GtOklLE39wOkqqaXxnGYrFY2yuUudFMz1C8kiUvxVwaSlTK8Bh1PJe6jLl24Dimb9wOvs2XhDnNPL82+LdjBP168q3jkykYUsDwoX3yLQlhgXhawPTWAxqvFx43Bg9DWRfVag/Yjmd5//Ye9sFw+8uLLOUKft4OC34tms33A485eaMvGA4e6OsJdrTaS9hwk/AywjaHws5SFa8Uouphv8LuB1fUtdlwANPPRVGtG63AwuvTX4TSu3iRRlUCvZjmcJCIdJpUqy+ZDPlqL6JNFRg1pGMESsOWZS2DWbZpbDf/nc2obftRGNA7Ob6fT2Hnb2CY3YLRX34zDLd82zd9Hsd3+WMY2p4NPWs2LZhqD8ZpwzgXgvn5MYznbFHw8yVA1GMQi7Xmor9cAqZoYH4aDlI1rydgJdj+UZ1VhVCw/wBF8Ri2e1XW4q8/4XC27jcTU7nxvjig4+6XscC3mO2Ygbnjf6lFbcuhbtsBK3je8qqUci5K1bg7XsGPdSQI23PFo5UfHY/Haw86euRxVKfLuXdmBmPUZwGljsvQwTSdvCiWC74ckkXCo4iTJSdTWRScRLIZUJVw8P9ZXUxF+V1zC7ojxG6+veZllTxHp5lmokJneM/hUQfnOwW3tDPYFSK2f/e4VftT+Be99GvBAfmm4uWzx5f9RfBkSCqRZSQXhE+k9tp7GK948bwi0NV9DSRTK0Gw+5xP05DMgYTA3LIkSuYC3Cbyn4QfZ6KZLYwfjEA42EXbADFkXRKuFKw6L0KxN/r3Ygr78UGMyTtBFE8jImEiJYnQtLrTa+AlWWcRKcQD/FAXUUN6OfCMnrQeFpIIfnkry1DgogCfXWtO4mqGA+2c8QcwS1jy+Z7FPj2y1eYCWBqY9kRoBkmLWkTjDbHBv3zdrp8+tBDHKVTnbLnr5w84UVXh9iCxWBCIB2aANZWa48inhYR1bz8VMzGv0CRpieMB06lmPGEm+Ir0wIiii/LwsfN9xwXOcw5xHgxyS3b3Us44sI7Z4rr1c7tDdlY32Vk23SM7xznEddRhLY/qBP6TfR01XMc2Wp7mzvSE6YiImqKH7AL7DJQgDiexwyBM6eE6K7gMyj7VQeSxhbFNdhmcyWMcdydAcOhlYH65GHMfhbkUcx8F2WNuf2cD0Avts/BogEDZhWZzToAAf5dpyLcxgtMv0RgNwCc6OxECxKtBAFFDW6EB7QATgrv7HtnpRY0qaS8wuI7JUtbAEqDUwE0rAWwnF8AbOY9E4yK/RCWEjXhhiI5TymdfDclDqkDzgNQ4qFxUVYfAOiHAylxpKyZROapq8NApz9Cjv3v9A/m0+t64cMBNwHWjlpoCIyoNiUwLzLdA2RXO1DN9FbhNIpEMGR2C0wVOLEGCkmbNiMh5mimQXEqW5VLLs2tQq1qcqQXP58AhI92cSxSSjRGAJsnPNRKrLFTDvKBo", "base64"));
  res.write(new Buffer("QAgqYFe4QwslaFzPYQjdI72UesApjOzqK4I0+EKBMiwbZi5lCNtguJaHHMZQTxNS4CYEAg05BhgNTSNTwi0immpByMmkTPGzBsULyjqfZJrJFSwEhn1AFISHpVQKjPcJb34QBV6Bl4N5MAgpIogjeKNwYajNKDKNH5XpA15doggsdZOWu7ComShUsyBcS91FCusSwY7TY8RfCY9BfCMiwCAfi89AzzVEJg0atMJ9YT3H7hJoUs2K4f2VnJOoLtPV8QHGBjqAiPFYAS6PYP2WK4mMBwcQ2z51m8HGOvwDbjFYni62B/HsMfgH2N48qHB3OtwS/6dSLMkPvAqzNI5b5L96JHeFrtvF/bYTBHvc7zPzEPlbJnLXxo8FtnuKIwuMjQu5o5Qy8GR+FPdQP1z9WzFMx/Ko6QWu1UP87kn+uAOih/Vd9yRu6QDZo/xzuLgD44JE3IFwXD8zPKM5G+McblRJOt8Qo+X3i2c78CxAtqxd8UxtN3BsarXJ8SW40Qi8DOgn8HyJgCdxnxvRn4KHK3ko1trqvTYHz8hHIMxEgMf+8npainvQvILcQBsnb4pp+a+/hykHioTBTiS4tR/fp7MZMMKLa0L9PCexYf/UqTqoDV7IcRg4IvuQI5qnAhRODO2pzNKtI/qo28nb7Q8bHbI2wa4QsbucEQuYv+eMmM8OOSPbbu99yz/hQAy2jWcZrXW780PbsVwIsZy+c7fTdudjGCv0fdN1La/HJfkneb1ulB6v5PsneaVunONaxHGsy8BcVIt0w1zQBXaDHNcibnChuexpEdsM3NZz41jnzMdxhR0HNGD8Lt5bG3fnJNnyTxKkj4AEoxNuMx5Ed8neA2rafgvIc895RCcs4o4Pjiu8mx3nKe9Cz+g5VJXw+Xy54Sq396AXlsrxvOCRhmM2iss2TX3PoyX5vs74c0VeNvH5myUoETzeFHt89cQM0i91Noegni+ULAyYgzIyQEBBtoHDUBkgX8ksEyH2rhNIj7uXBRAg/KWTc3EMphhjrK7mEMwjHjNN1zAtI4NuR4ihRhM9iZGASYwUTmKcVHn2O2DjmYIBUFlQ8hL6aI6Ju4N133V9x3T8rmC9PcctQ/6XbiWv182bUL2x/C47Wl3saDG6f0wH63mIHXediXnKMZ3NjPU2uXM4bHMKjxTri9P9U061OiCOc+JJz1sHwuXSUJ0QlyOPDoCe8Nk+hWs7IM6KnmWx9Uh6AXvOlRyXutRyfGc3fLZtnzF43HaiZxHLElR7XZSpEoRaZkAZeeubzNxzSn8UVbW8Oizep/hbmvOpUOM4NSJRgexv3JQx0RijFcaolEueVctRXAox0rcYjg1mAp3h3A5IKTLoupBNQn51BPCbuh+Px2vnc1u8+TzPcKawI6kZkN/R2+ImkVKXG+hlVLCSzWEPM6l9dVtQxyMKVgePkIbEC2b6bAM++pZJElmXiqg5+I0hYZZjznKy4NlMRLfFR9O33S53B4vgOKbpdEoCUYmkrltaABrIO92ydnLrhdzxcszr1ACwBa09N0fZ4dw7YztBhu0+3Q0Fhu+4rtHaf3eMBdSdTCZ2/7HE05MFB3B8NzIFdaO4LyfhPt3nHYfpO57wn+75jgMdVwL2CWffx3EuJwWO41zKnR9HOS4GHOusXd3C2VMDj4J00306exxAimOIjcQkpKw3Srfcp8uBQ0ihJQKb+pz2hen0rBm1bHcOKYayCEVZbXkRc7M9vGjblHmB5XtshxddN6AU/GmbFz/iXdOSzzF9f1MrXhQ8IS9Fcc9zPGbCk/dswZdKH6pzMit4ONPsgdUcS6xM0Kf7RUQmmSgi/IJdLWQZqeZkXlV1UWyq3TTWckz+IjAbgGVn5VDfUfCy1EUF7eugHywiyDBRghdhWh7r28JSRCkAkns52SQuVI0pdAjRhzCBJdjtX/873s8=", "base64"));
  res.write(new Buffer("Hq2y6A9pJORwM+X/+5+/aVLky2bQ7TFMxBRAF+tiO8xGUEqWegIyi8bkBsEBF/P8WHVQcV28oNJ8nmEBQFmVPK3qUgx1sqOqQX0sdV9N1xXYVJsxSuNYlJgh0cs+r9QYpqINDterms of the MIT licensexaNmLhPAmUg5AyPn2ylg3UdjpXWJIR4UZil85giOKRhtvDirBfSu7bZaq9m4HTtgIwwixYAJV3md5tmLiB4VSBqiMDCoMEBEUctQWNlTVKN5a4+NQj7HwYCu0ksEH0BZGYfiobdNYmytrfQeaxJ4Ty3JgAlkcBe1mI1aEafV/FKVguvkSmftIDwr8ECbqNbcQ+FLA7aNXt6uv69jl/XDtptMYZ2FFIG7XzVI/YORC3TbFjenVY0FuDZbB3EXhSYVdOKEvTrthOOeAzgTmwUCLCr6CgdPSNsch+kJXJwTVOFxoMvlVo7jXLBE8QjK8YDCvthsekodTggrj+OcQ745Podc1yCs2Bd3UE9Sx7Idl9meY9Ed9sWqZzew2+T7mpcz8lqEIp+Ico+pboA3K11TrskV89iSz0CXTUu50JyAKWlO/iwylZD1UMc6nf8BSFOFogDGacoQBK/Qs2g379B//sP2ntts7Nirej5i/fMfhD13zHFAm6Y/d59keTA737K6lB1m+DMpp1vneFMB7ZE/AsHDsKudc6yVVXa8JO3M8nh+cKDczDyY5XF2i5o896SCMyCx1kLeeYL5NGQWi/q8JD0LxnaoGUaWN+lxkvZJFWfdKH0+0jwp/dKNc1zbnVg+1Q1z0SxPN8wFszzdID0VZ8GFVqYnywPh3DlGi82JMP2JE9O+LI/nn2M3blJKI5OzuFc+muY5QKHlmZYNIaXfox6pc1IuqXuBzuKvWqXhlrwsr4+8bIs6FDieejvcZbkBHvTSNnm9wxep/h3/upktQb0cSO5MviXXFRbo5VjQTVIsEMukLl6bC4naaCXvUqxFlyAu5WJVyxelkdZp+O7SIs0yXUaNpWirQrZNfTdWtOGrWvClkPjfolWixnOyKFN99pkvifjMc+jwVSJAwk5Qx6arKjosh1tpJhE9w/eMvphizfhtsSo25AvgJgIj5goLyDX/gDBWcjwek08JmFc9uy1GoxHc0UxD11jhLFKsmau0zM3rMFl9eUY+YG2baiYqZfNCVrUqRl+A6tRFahMZLbEhkjiHtBoT+LMaky6sB30mIyw105V7gs+a2ki0WFN5j2fG01XPudQxACzKc3w74B7rBsMhmWGAAWuiOMpqcvUaQogbLEJEgYgn0lq8SwEX61HCys+alQd9CXbN8X48KcAx6OpEEL4lnigD6682x2q0QkCA8klKMH/ULvdv6vzCTNaRaiolJ3ApWDjbFuDNM6xqQQFN8CWFaaLvTTFEwoE6q7Nq2EcwZqznh9UqQTGKBSh0fPUhzYWCvRYLtGhdxDyFZYA/+BKAIB9x4Kvax3U5YoQvuukCP9Df0Ag79ge+IHGaiTHRRyc5PMqfyQi3S9OgEgjKmu+6CrR5CWNVy0jepzNMUcJw38Ti8+bkIsJAEAKjdR0iniegZuc4OVgTLGuEYb41CBv7+FoeuREz+P+1koSZJrZ4eU5elYBNxw4o+eJeLp/hBtZ7cl+4g5Oqp6COJ02dqywmYN3ZeJ7Mv0ujb7Zu4Auez/+AsdU3GS+n4pBO/xNYmHwoQKhDD+tExH/vHxZEYhSJcQyLiGcXjU7XXsC4gd1STEcvRWGAe4Y/LKD6BUHv4LnAqgd9KHAApzkLqNNo9yVEjTEBiNYLmIePHfDW0fX2qi6gGPb3vIRdNZbl1EjgGz4Jxn8qURpAEzCVwMQg+cjhxjt8RP4D7urCeLxQUcH1IoF/KzG6/qYP6PX7F8cMtTHLODq4uJvTlwP3V4sUXZke16afQ518ai7s6mc7hgqrhZsOD/ajf15106U=", "base64"));
  res.write(new Buffer("TtoGOVgUu0Zr6RPdhKeeLWWy5rwdaWIHnckn2LT7KXY3OFiAxvxWRMKcEyo8HcM2Hc/YPqB3UegJLxJ277sw9IT87j6M4MyP+STiZl/i6enx4lGUvrwTfXpm4yjO5U5vjsJcSjMcBTme4KfB0xMnR2HOCUnv+Zy3zlPs3hf8XWa5zAGW2y09cmzbheeTtUPSuFZJmqejtOBluheOdjkM6Mn3qY0Ogx1yGMu64paz9Rb4veUn1gPZ9ROdVfPUdOmBSlXr4Dtztq6/2Wg+03v6nvcMlzHH2FrvjsY0jGMn4H1viNMTHuF9mMgC1eL7zOwtnn+6QDqK0pugfrrbO4rTl5++0HQud4ZxFOZS/ugoSE/B0QkJ1qMwJ/qjn/4f4tqgfXBEAAA=", "base64"));
  res.end();
};