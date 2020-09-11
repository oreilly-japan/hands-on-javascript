(module
  ;; JSから受け取る関数
  (import "console" "log" (func $log (param i32)))

  ;; JSと共有する記憶領域
  (import "js" "mem" (memory 1))

  ;; JSから利用できるadd関数定義
  (func (export "add") (param $v1 i32) (param $v2 i32)

    ;; 変数宣言
    (local $result i32)

    ;; 引数を合計した結果を$resultに保存
    (set_local $result (i32.add (get_local $v1) (get_local $v2)))

    ;; 結果を共有領域に保存
    (i32.store (i32.const 0) (get_local $result))

    ;; 結果を$log関数で表示
    (call $log (get_local $result))
  )
)
