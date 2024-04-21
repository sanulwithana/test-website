import React from "react";

function Icon({ color, gap }) {

  
  const iconStyle = {
    fill: color || "#FFD700", 
    width: `256px`, // Dynamic width with added gap
    height: '240px',
    position: 'relative',
    right:'1rem',
    backgroundColor:"rgba(28, 36, 51, 0.4)",
    borderRadius: "1rem",
    padding : ' 0 1rem'
  };

  return (
    <div>
    {/* <p  style={{color: "yellow",position:'relative',top:'10.5rem',right:'-5.9rem',maxWidth:"170px" ,fontSize:'1.5rem',fontWeight:'500',textAlign:'center',lineHeight:'1.5rem'}}>the great absent of doomm dasdad sdasds</p> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={iconStyle}
      version='1'
      viewBox="70 80 1220 1220"
    >
      <g fill={color} elevation={20}>
        <path
          d="M3195 11181c-240-68-436-242-519-459-29-75-56-203-56-262 0-32-12-55-63-127-230-320-453-730-607-1113-440-1098-509-2328-195-3470 182-662 510-1319 933-1868 630-819 1474-1444 2442-1805 96-36 193-70 215-76s47-16 55-22c12-9 12-10-4-5-42 14-195 18-265 7-181-28-319-100-456-235l-89-89 32-26c17-15 65-44 106-64 335-166 718-88 964 196 23 27 42 52 42 55 0 10-104 73-167 101-29 14-51 26-50 28 2 1 40-8 84-21 104-31 312-79 486-111 226-41 545-120 564-139 2-2-27-22-64-44-175-105-295-243-318-364-11-59 24-107 80-108 45 0 71 24 90 81 33 99 169 217 356 310l87 42 78-37c180-85 325-208 359-303 31-84 89-115 143-77 37 26 44 59 27 117-33 111-128 219-283 320-67 45-88 63-78 69 45 25 319 91 601 143 149 28 285 59 428 99 48 13 87 22 87 20 0-3-21-14-47-25-65-28-163-88-163-101 0-18 74-101 139-154 227-188 538-235 806-123 81 33 185 96 185 111 0 20-77 103-150 161-169 135-397 200-595 169-79-13-94-10-38 8 553 176 1130 470 1592 813 1097 812 1850 1988 2120 3312 127 627 141 1278 40 1925-126 809-435 1580-900 2251-86 123-88 126-95 200-26 272-171 496-404 622-58 31-213 87-242 87-7 0-9-23-5-72 19-219 117-413 276-544 70-59 214-134 296-154 28-7 59-18 70-25s55-64 97-126c816-1212 1103-2712 794-4149-159-738-491-1464-951-2075-296-394-687-784-1082-1081-688-517-1496-858-2375-1004-186-30-400-83-573-141l-155-51-142 47c-197 64-377 108-615 150-607 106-1093 267-1601 531-1253 649-2211 1776-2641 3107-123 380-193 719-243 1167-20 180-16 825 5 1020 78 688 243 1267 527 1845 110 224 200 382 342 597 105 160 112 168 152 178 353 89 578 350 610 708 7 82 11 79-79 53zM2185 10666c-106-113-163-229-191-387-14-80-14-107-4-183 17-124 73-286 99-286 5 0 41 34 81 77 156 167 222 401 175 623-18 85-72 220-88 220-7 0-39-29-72-64zM11463 10673c-62-140-81-330-48-471 20-86 72-194 129-269 46-61 109-123 125-123 10 0 54 98 76 170 25 82 30 249 11 340-24 116-94 247-178 336-39 41-75 74-80 74s-21-26-35-57z"
          transform="matrix(.1 0 0 -.1 0 1380)"
        ></path>
        <path
          d="M2840 10289c-150-38-273-117-367-234-49-61-116-194-128-252l-7-33h74c90 0 198 29 293 78 90 46 218 172 268 262 27 51 77 176 77 197 0 11-147-1-210-18zM10710 10303c0-5 9-35 19-66 94-273 321-450 594-465 53-2 97-2 97 1s-11 37-24 77c-88 258-325 440-597 457-56 4-89 2-89-4zM1621 9866c-82-136-116-269-109-425 8-171 65-312 177-442l44-51 19 29c31 45 79 144 99 201 79 230 19 512-150 705-18 20-36 37-40 37s-22-25-40-54zM12048 9871c-208-234-234-590-62-864 36-57 37-58 56-40 30 26 102 130 131 188 54 108 72 190 71 325 0 113-3 134-31 215-29 84-92 207-112 220-5 3-29-17-53-44zM2535 9575c-199-43-370-173-462-350-36-70-73-170-73-198 0-6 34-8 89-4 200 15 382 109 496 257 51 67 120 204 134 268l9 42-67-1c-36 0-93-6-126-14zM11035 9558c4-18 21-66 37-106 104-251 326-410 601-429l88-6-7 29c-31 134-120 283-221 373-111 100-297 171-444 171h-61l7-32zM1232 8943c-48-112-57-163-56-303 0-118 4-145 27-215 15-44 43-109 64-145 38-64 178-217 220-239 20-10 24-8 43 30 60 118 82 342 47 479-26 99-98 236-163 308-53 59-138 132-154 132-4 0-17-21-28-47zM12386 8898c-103-103-153-182-194-306-21-65-25-97-26-202-1-76 4-146 13-180 16-63 60-180 69-180 17 0 120 90 167 147 178 215 218 482 114 759-12 32-26 54-35 54s-57-42-108-92zM2301 8790c-296-78-505-320-528-612-7-92-10-90 107-57 288 80 482 315 515 627 8 72 13 70-94 42zM11364 8735c27-302 231-540 531-621 83-23 95-20 95 21 0 53-29 182-55 247-87 215-298 380-539 423l-39 6 7-76zM2147 7936c-99-41-169-88-249-168-131-132-197-297-198-494 0-50 3-105 6-122l6-30 40 14c98 34 184 90 269 174 73 72 93 100 132 180 52 107 77 211 77 322 0 79-9 148-19 148-3 0-32-11-64-24zM11536 7938c-11-42-6-232 8-288 46-186 147-332 299-434 62-41 197-100 206-90 3 3 6 65 6 137 0 95-5 150-18 197-54 198-195 366-381 455-103 48-112 50-120 23zM1005 7898c-21-94-24-125-24-218 0-213 65-369 218-520 64-63 107-96 168-128l81-42 11 32c5 18 15 71 21 118 41 300-118 601-390 744-37 20-71 36-74 36s-8-10-11-22zM12647 7875c-276-162-415-452-366-768 6-39 15-82 20-95l9-23 68 35c184 98 324 269 378 466 33 119 19 430-19 430-7 0-47-20-90-45zM2136 7055c-148-89-262-233-318-400-20-60-23-90-23-215 0-126 3-155 24-217 13-40 26-73 28-73s30 16 61 36c168 107 272 246 323 431 37 130 24 357-24 449l-13 24-58-35zM11551 7072c-29-55-45-152-45-277 0-114 4-140 27-210 34-101 86-190 160-271 62-68 205-170 219-156 5 5 18 40 29 78 32 105 32 302 1 404-50 159-155 304-281 389-90 61-99 64-110 43zM954 6773c-10-65 9-223 36-303 81-235 253-403 494-480 37-12 73-19 81-16 22 8 19 149-4 264-42 203-163 377-335 480-63 39-180 88-230 97l-34 7-8-49zM12710 6801c-178-59-314-161-411-309-83-126-119-255-119-423 0-80 3-99 14-99 34 0 176 52 236 87 36 21 105 78 156 128 151 150 214 303 214 523 0 128 4 124-90 93zM11407 6162c-65-124-82-199-82-357 0-131 2-145 31-227 39-107 127-242 200-305 31-27 61-48 67-48 7 0 29 32 50 72 140 268 95 601-111 824-35 38-76 78-92 89l-28 20-35-68zM2249 6177c-201-182-290-452-230-701 25-102 93-256 114-256 23 0 169 160 210 230 21 36 49 101 64 145 36 111 39 292 5 408-26 92-87 217-105 217-6-1-33-20-58-43zM1130 5708c0-50 27-164 56-240 100-262 361-455 642-475l82-6-6 49c-20 171-95 339-200 453-134 144-297 223-511 246l-63 7v-34zM12515 5729c-91-13-212-54-285-96-37-21-104-77-155-128-77-76-98-105-137-185-49-98-72-174-83-272l-7-58h50c115 0 273 50 385 122 190 123 308 323 342 581 6 47 6 47-22 46-15-1-55-5-88-10zM2525 5343c-62-78-121-200-146-303-41-161-14-358 68-509 38-71 119-181 133-181 13 0 71 71 109 134 125 208 144 447 51 670-31 74-108 194-148 229-20 18-21 18-67-40zM11138 5354c-57-68-114-170-145-259-24-72-27-94-28-220 0-128 3-148 29-228 16-48 44-113 63-144 46-78 105-153 118-153 19 0 112 131 149 210 54 114 70 188 70 315 0 129-17 203-73 320-36 76-125 206-139 204-4 0-24-20-44-45zM1518 4703c-16-2-28-6-28-7 0-2 11-38 25-80 47-144 108-239 218-342 160-149 375-221 600-199 91 8 91 7 48 125-39 106-90 188-169 272-153 162-341 240-569 237-54-1-110-4-125-6zM11960 4700c-176-30-359-142-466-283-76-101-169-317-143-333 6-3 54-8 108-11 273-15 532 111 679 332 51 76 106 195 117 256 7 36 6 36-32 42-50 9-206 7-263-3zM2955 4586c-131-224-140-492-23-726 35-70 61-104 146-190 119-121 106-121 168 6 52 107 74 208 74 334 0 213-63 362-221 523-52 53-101 97-107 97s-23-20-37-44zM10707 4585c-100-81-188-208-232-334-51-144-55-287-14-441 24-91 90-224 113-228 10-2 52 32 109 90 77 77 100 109 140 188 26 52 55 124 64 160 24 89 24 272 0 360-20 74-101 250-116 250-5 0-34-20-64-45zM3501 3896c-53-141-63-319-26-461 22-83 85-209 139-277 58-73 162-158 243-200 73-38 72-39 103 60 86 274 15 566-186 768-57 57-213 164-240 164-7 0-22-24-33-54zM10140 3906c-318-188-455-553-337-904 13-39 28-68 37-70 19-3 124 59 192 114 193 158 296 415 266 664-12 100-54 240-71 240-7 0-46-20-87-44zM2218 3790c-57-10-148-37-166-49-11-7-8-19 14-62 96-191 263-340 452-404 106-36 237-49 340-35 73 10 209 44 220 55 6 5-50 108-90 168-47 69-129 153-192 196s-178 97-251 116c-70 19-259 28-327 15zM11277 3790c-242-44-459-205-569-425-35-69-35-70 39-93 375-116 751 42 938 393l37 70-32 13c-100 41-305 62-413 42zM4171 3320c-26-120-7-307 43-432 54-134 160-263 280-342 61-40 202-102 246-108 24-3 26 0 39 82 11 66 12 106 4 180-34 307-221 544-511 645-39 14-76 25-81 25s-14-23-20-50zM9500 3351c-195-62-361-205-451-386-50-102-69-176-76-295-5-78 10-240 21-240 19 0 149 51 211 83 60 31 102 63 171 132 77 76 98 105 137 185 53 108 74 181 83 290 8 88-12 250-30 249-6 0-36-8-66-18zM3050 3015c-103-21-300-103-300-125 0-14 98-136 137-171 47-43 142-108 198-136 159-81 407-99 578-42 79 26 207 88 207 101 0 17-62 99-116 153-184 184-457 270-704 220zM10438 3020c-220-40-407-159-529-337l-29-42 42-25c128-75 251-107 408-107 174-1 327 48 460 146 50 37 164 153 198 202l23 32-39 25c-52 32-142 70-217 90-71 19-250 29-317 16zM4936 2902c-10-30 11-192 34-267 84-270 297-460 585-520 39-8 82-15 98-15 26 0 27 1 27 59 0 194-85 397-224 536-112 112-242 180-404 211-96 18-109 18-116-4zM8680 2901c-154-37-258-91-361-188-150-142-239-344-239-544 0-82-6-79 138-49 346 71 601 378 602 723v77l-32-1c-18 0-67-9-108-18zM4085 2410c-157-17-299-78-433-187l-43-35 28-30c88-93 268-193 400-222 102-23 260-21 359 4 100 25 219 84 308 151l70 52-55 50c-177 164-404 241-634 217zM9492 2409c-154-18-326-98-442-206-69-64-70-60 25-129 146-104 262-144 440-151 112-5 143-2 215 16 99 25 186 64 267 119 66 46 143 115 143 129 0 15-130 108-197 142-135 67-304 97-451 80z"
          transform="matrix(.1 0 0 -.1 0 1380)"
        ></path>
      </g>
    </svg>
    </div>
   
  );
}

export default Icon;
